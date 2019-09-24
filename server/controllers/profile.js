const Profile = require('../models/profile.js');
const mongoose = require('mongoose');


module.exports.controller = (app) => {
        // add a new profile
        app.get('/profile', (req, res) => {
                res.render('profile', {
                        title: 'profile',
                        description: 'This is the description of all the profile',

                });

                Profile.find()
                        .then(profiles => {
                                res.json({
                                        confirmation: 'success',
                                        data: profiles
                                })
                        })
                        .catch(err => {
                                res.json({
                                        confirmation: "fail",
                                        message: err.message
                                })
                        })





        })


        app.post('/profile', (req, res) => {

                const newProfile = new({
                        _id: mongoose.Types.ObjectId(),
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        Date_of_birth: req.body.Date_of_birth,
                        phone_number: req.body.phone_number
                })


                newProfile.save()
                        .then(data => {
                                res.json(data);
                                console.log(result);
                        })
                        .catch(err => {
                                res.json({
                                        message: error
                                });
                        });
        });
};