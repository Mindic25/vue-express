var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Profile = require('../models/profile');









/* GET */
router.get('/', (req, res, next) => {
      Profile.find()
      .select(' _id first last DOB phone')
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          profiles :docs
        }
        //console.log(docs);
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      }) 

});


/* GET a single Profile*/     
router.get('/:profileID', (req, res, next) => {
         const id = req.params.profileID;
         Profile.findById(id)
         .exec()
         .then(docs => {
          res.status(200).json(docs);
        })
         .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err 
          })
        });

});


/* POST */
router.post('/', (req, res, next) => {

    var newProfile = new Profile({
    _id: new mongoose.Types.ObjectId(),
   first: req.body.first,
    last: req.body.last,
    DOB: req.body.DOB,
    number: req.body.number,
  
  
    keeperHeight :req.body.keeperHeight

   });
   

   newProfile.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
  res.status(201).json({
    message: 'Handling POST requests....',
    createdProfile: newProfile 
  
  }); 
});

/* DELETE */
router.delete('/:profileID', (req, res, next) => {
           
       const id = req.params.profileID;
       Profile.remove({_id : id})
       .exec()
       .then(result => {
         res.status(200).json(result);
       })
       .catch(err => {
         console.log(err);
         res.status(500).json({
           error: err 
         })
       });
})

/*  UPDATE */
router.patch('/:profileID', (req, res, next) => {
  const id = req.params.profileID;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Profile.update({_id : id}, { $set: updateOps })
  .exec()
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err 
    })
  });
});

module.exports = router;