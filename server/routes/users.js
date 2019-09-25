var express = require('express');
var router = express.Router();
//const mongoose = require('mongoose');
//const Profile = require('../models/profile');


let profileController = require('../controllers/profile');


/* GET All Profile*/
router.get("/", profileController.profileAll);

/* GET a single Profile*/     
router.get('/:profileID', profileController.profileone);


/* POST */
router.post('/', profileController.profilepost);
router.post('/:profileID/attackmidfield',profileController.attackmidpost);
router.post('/:profileID/centerback',profileController.centerbackpost,);
router.post('/:profileID/fullback',profileController.fullbackpost);
router.post('/:profileID/goalkeeper',profileController.goalkeeperpost);
router.post('/:profileID/holdmidfield',profileController.holdmidfieldpost);
router.post('/:profileID/striker',profileController.strikerpost);
router.post('/:profileID/widemidfield',profileController.widemidfielderpost);







/* DELETE */
router.delete('/:profileID', profileController.profiledelete);

/*  UPDATE */
router.patch('/:profileID', profileController.profilepatch);


module.exports = router;