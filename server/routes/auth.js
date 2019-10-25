const express = require('express')

const Joi = require('joi')
const bcrypt = require('bcryptjs')
const Profile = require('../models/profile')
const jwt = require('jsonwebtoken');


const schema = Joi.object().keys({
  first: Joi.string()
    .alphanum()
    .min(3)
    .max(15)
    .required(),
  last: Joi.string()
    .alphanum()
    .min(3)
    .max(15)
    .required(),

  password: Joi.string()
    .min(8)
    .required(),
  confirmpassword: Joi.string(),
  email: Joi.string()
    .email({
      minDomainAtoms: 2
    })
    .required()
})



const routerAuth = express.Router()

routerAuth.get('/', (req, res) => {
  res.json({
    message: '🔐'
  })
})

routerAuth.post('/signup', (req, res, next) => {
  console.log('body', req.body)
  const result = Joi.validate(req.body, schema)

  if (result.error === null) {
    Profile.findOne({
      email: req.body.email
    }).then(profile => {
      if (profile) {
        const error = new Error(
          'The email is already in use. Please choose another one'
        )
        res.status(409)
        next(error)
      } else {
        bcrypt.hash(req.body.password.trim(), 12).then(hashedpassword => {
          let newProfile = new Profile({
            first: req.body.first,
            last: req.body.last,

            password: hashedpassword,
            email: req.body.email
          })

          Profile.insertMany(newProfile).then(profile => {
            res.json(profile)
          })
        })
      }
    })
  } else {
    next(result.error)
  }
})

function respondError422(res, next) {
  res.status(422);
  const error = new Error('Unable to login.');
  next(error);
}


routerAuth.post('/login', (req, res, next) => {

  const result = Joi.validate(req.body, schema);
  if (result.error !== null) {
    Profile.findOne({
      email: req.body.email,
    }).then(profile => {
      if (profile) {
        bcrypt
          .compare(req.body.password, profile.password)
          .then((result) => {
            if (result) {
              const payload = {
                _id: profile._id,
                email: profile.email
              };
              jwt.sign(payload, process.env.TOKEN_SECRET, {
                expiresIn: '1d'
              }, (err, token) => {
                if (err) {
                  respondError422(res, next);

                } else {
                  res.json(token)
                }
              })
            } else {
              respondError422(res, next);
            }

          });
      } else {
        respondError422(res, next);

      }
    });
  } else {
    respondError422(res, next);
  }

})


module.exports = routerAuth