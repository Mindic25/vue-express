var express = require('express');
var router = express.Router();
//const mongoose = require('mongoose');
//const Profile = require('../models/profile');


let profileController = require('../controllers/profile');


/* GET All Profile*/
router.get("/", profileController.profileAll);
router.get('/:profile/attackingmidview', profileController.attackMidview), router.get('/:profile/centerbackview', profileController.centerBackview),
        router.get('/:profile/fullbackview', profileController.fullBackview),
        router.get('/:profile/goalkeeperview', profileController.goalKeeperview),
        router.get('/:profile/holdmidfieldview', profileController.holdMidfieldview),
        router.get('/:profile/strikerview', profileController.Strikerview),
        router.get('/:profile/widemidfieldview', profileController.wideMidview),

        /* GET a single Profile*/
        router.get('/:profileID', profileController.profileone);


/* POST */
router.post('/', profileController.profilepost);
router.post('/:profile/attackmidfield', profileController.attackmidpost);
router.post('/:profile/centerback', profileController.centerbackpost, );
router.post('/:profile/fullback', profileController.fullbackpost);
router.post('/:profile/goalkeeper', profileController.goalkeeperpost);
router.post('/:profile/holdmidfield', profileController.holdmidfieldpost);
router.post('/:profile/striker', profileController.strikerpost);
router.post('/:profileID/widemidfielder', profileController.widemidfielderpost);







/* DELETE */
router.delete('/:profileID', profileController.profiledelete);

/*  UPDATE */
router.patch('/:profileID', profileController.profilepatch);


module.exports = router;