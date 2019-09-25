var Goalkeeper= require('../models/goalKeeper');
var AttackMidFielder = require('../models/attackMidfield');
var CenterBack = require('../models/centerBack');
var Fullback = require('../models/fullBack');
var HoldMid = require('../models/holdMidfielder');
var Striker = require('../models/striker');
var WideMide = require('../models/wideMidfield');







let mongoose = require('mongoose');


let profileSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        first: String,
        last:  String,
        DOB: Date,
        number: {
                type: String,
                validate: {
                        validator: function (v) {
                                return /\d{3}-\d{3}-\d{4}/.test(v);
                        },
                        message: '{VALUE} is not a valid phone number!'
                }
         },

        
         
         
        /* Case GoalKeeper */
       /*  keeperHeight : {type: mongoose.Schema.Types.Number, ref: 'Goalkeeper.Physiological.Height'},
         keeperStrength : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Physiological.Strength'},
         keeperPower : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Physiological.Power'},
         keeperAgility : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Physiological.Agility'},
         keeperCoordination : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Physiological.Coordination'},
         keeperReactTime : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Physiological.Reaction_Time'},

         keeperVision : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Tactical.Vision'},
         keeperOrganisation : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Tactical.Organisation'},
         keeperCommunication : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Tactical.Communication'},
         keeperDistribution : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Tactical.Distribution'},

         keeperShotStopping : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Technical_Def.Shot_stopping'},
         keeperCoordination : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Technical_Def.Coordination'},
         keeperRecovery : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Technical_Def.Speed'},
         keeperSpeed : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Technical_Def.Shot_stopping'},
         keeperSave : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Technical_Def.Save'},
         keeperPunch : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Technical_Def.Punch'},

         keeperPassing : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Technical_Att.Passing'},
         keeperThrow : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Technical_Att.Throw'},
         keeperBallcontrolFeet : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Technical_Att.Ball_control_with_feet'},
         keeperKick : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Technical_Att.Kick'},
         keeperTackle : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Technical_Att.Tackle'},

         keeperConcentration : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Psychological.Concentration'},
         keeperMotivation : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Psychological.Motivation'},
         keeperAttitude : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Psychological.Attitude'},
         keeperBodyLangauge : {type: mongoose.Schema.Types.Array, ref: 'Goalkeeper.Psychological.Body_language'}, */















         

         /* Case AttackingMidfield */
        /* AttackMidstamina : {type: mongoose.Schema.Types.Number, ref: 'AttackMidd.Physiological.Stamina'},
         AttackMidStrength : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Physiological.Strength'},
         AttackMidPower : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Physiological.Power'},
         AttackMidSpeed : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Physiological.Speed'},

         AttackMidVision : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Tactical.Vision'},
         AttackMidOrganisation : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Tactical.Organisation'},
         AttackMidCommunication : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Tactical.Communication'},

         AttackMidTackle : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Def.Vision'},
         AttackMidPressingOpp : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Def.Pressing_opposition'},
         AttackMidInterAnticipation : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Def.Interception_anticipation'},
         AttackMidHeading : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Def.Heading'},

         AttackMidPassing : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Att.Passing'},
         AttackMidAttRunningBall : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Att.Running_with_the_ball'},
         AttackMidBallControl : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Att.Ball_control_with_feet'},
         AttackMidDribbling : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Att.Dribbling'},
         AttackMidSupportPlay : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Att.Support_play'},
         AttackMidCrossing : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Att.Crossing'},
         AttackMidShooting : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Att.Shooting'},
         AttackMidHeading : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Technical_Att.Heading'},

         AttackMidConcentration : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Pschological.Concentration'},
         AttackMidMotivation : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Pschological.Motivation'},
         AttackMidAttitude : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Pschological.Attitude'},
         AttackMidBodyLanguage : {type: mongoose.Schema.Types.Array, ref: 'AttackMidd.Pschological.Body_Language'}, */


        /* Case CenterBacks */
      /*  CenterBackstamina : {type: mongoose.Schema.Types.Number, ref: 'CenterBack.Physiological.Stamina'},
        CenterBackStrength : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Physiological.Strength'},
        CenterBackPower : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Physiological.Power'},
        CenterBackSpeed : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Physiological.Speed'},

        CenterBackVision : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Tactical.Vision'},
        CenterBackOrganisation : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Tactical.Organisation'},
        CenterBackCommunication : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Tactical.Communication'},
        CenterBackPassing : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Tactical.Passing'},


        CenterBackTackle : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Def.Tackle'},
        CenterBackPressingOpp : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Def.Pressing_opposition'},
        CenterBackInterAnticipation : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Def.Interception_anticipation'},
        CenterBackMidHeading : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Def.Heading'},
        CenterBackMidClearence : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Def.Clearence'},


        CenterBackMidPassing : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Passing'},
        CenterBackAttRunningBall : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Running_with_the_ball'},
        CenterBackHeading : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Heading'},
        CenterBackDribbling : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Dribbling'},
        CenterBackSupportPlay : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Support_play'},
        CenterBackCrossing : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Crossing'},
        CenterBackShooting : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Shooting'},

        CenterBackConcentration : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Pschological.Concentration'},
        CenterBackMotivation : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Pschological.Motivation'},
        CenterBackAttitude : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Pschological.Attitude'},
        CenterBackBodyLanguage : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Pschological.Body_Language'}, */

                /* Case CenterBacks */
     /*   CenterBackstamina : {type: mongoose.Schema.Types.Number, ref: 'CenterBack.Physiological.Stamina'},
        CenterBackStrength : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Physiological.Strength'},
        CenterBackPower : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Physiological.Power'},
        CenterBackSpeed : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Physiological.Speed'},

        CenterBackVision : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Tactical.Vision'},
        CenterBackOrganisation : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Tactical.Organisation'},
        CenterBackCommunication : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Tactical.Communication'},
        CenterBackPassing : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Tactical.Passing'},


        CenterBackTackle : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Def.Tackle'},
        CenterBackPressingOpp : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Def.Pressing_opposition'},
        CenterBackInterAnticipation : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Def.Interception_anticipation'},
        CenterBackMidHeading : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Def.Heading'},
        CenterBackMidClearence : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Def.Clearence'},


        CenterBackMidPassing : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Passing'},
        CenterBackAttRunningBall : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Running_with_the_ball'},
        CenterBackHeading : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Heading'},
        CenterBackDribbling : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Dribbling'},
        CenterBackSupportPlay : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Support_play'},
        CenterBackCrossing : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Crossing'},
        CenterBackShooting : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Technical_Att.Shooting'},

        CenterBackConcentration : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Pschological.Concentration'},
        CenterBackMotivation : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Pschological.Motivation'},
        CenterBackAttitude : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Pschological.Attitude'},
        CenterBackBodyLanguage : {type: mongoose.Schema.Types.Array, ref: 'CenterBack.Pschological.Body_Language'}, */

        /* Case FullBacks */
       /* FullBackstamina : {type: mongoose.Schema.Types.Number, ref: 'FullBack.Physiological.Stamina'},
        FullBackPower : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Physiological.Power'},
        FullBackSpeed : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Physiological.Speed'},

        FullBackRunningofBall : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Tactical.Running_of_the_ball'},
        FullBackWhentoCross : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Tactical.When_to_cross'},
        FullBackSupportPlay : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Tactical.support_play'},
        FullBackPassing : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Tactical.Passing'},
        FullBackForceOffside : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Tactical.Forcing_offside'},



        FullBackTackle : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Technical_Def.Tackle'},
        FullBackPressingOpp : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Technical_Def.Pressing_opposition'},
        FullBackInterAnticipation : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Technical_Def.Interception_anticipation'},
        FullBackHeading : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Technical_Def.Heading'},
        FullBackClearence : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Technical_Def.Clearence'},


        FullBackAttRunningofBall : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Technical_Att.Running_of_the_ball'},
        FullBackDribbling : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Technical_Att.Dribbling'},
        FullBackCrossing : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Technical_Att.Crossing'},
        FullBackOffClearence : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Technical_Att.clearence'},

        FullBackConcentration : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Pschological.Concentration'},
        FullBackMotivation : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Pschological.Motivation'},
        FullBackAttitude : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Pschological.Attitude'},
        FullBackBodyLanguage : {type: mongoose.Schema.Types.Array, ref: 'FullBack.Pschological.Body_Language'}, */


        /* Case HoldMidfier */
     /*   HoldMidFieldstamina : {type: mongoose.Schema.Types.Number, ref: ' HoldMidField.Physiological.Stamina'},
        HoldMidFieldPower : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Physiological.Power'},
        HoldMidFieldSpeed : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Physiological.Speed'},
        HoldMidFieldStrength : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Physiological.strength'},


        HoldMidFieldVison : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Tactical.Vision'},
        HoldMidFieldOrganisation : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Tactical.Organisation'},
        HoldMidFieldCommunication : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Tactical.Communication'},



        HoldMidFieldTackle : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Def.Tackle'},
        HoldMidFieldPressingOpp : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Def.Pressing_opposition'},
        HoldMidFieldInterAnticipation : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Def.Interception_anticipation'},
        HoldMidFieldHeading : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Def.Heading'},


        HoldMidFieldAttPassing : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Att.Passing'},
        HoldMidFieldRunWithBall : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Att.Running_with_the_ball'},
        HoldMidFieldBallControll : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Att.Ball_control_with_feet'},
        HoldMidFieldOffDribble : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Att.Dribbling'},
        HoldMidFieldOffSupportPlay : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Att.Support_play'},
        HoldMidFieldOffCrossing : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Att.Crossing'},
        HoldMidFieldOffShooting : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Att.shooting'},
        HoldMidFieldOffheading : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Technical_Att.heading'},


        HoldMidFieldConcentration : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Pschological.Concentration'},
        HoldMidFieldMotivation : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Pschological.Motivation'},
        HoldMidFieldAttitude : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Pschological.Attitude'},
        HoldMidFieldBodyLanguage : {type: mongoose.Schema.Types.Array, ref: ' HoldMidField.Pschological.Body_Language'}, */


        /* Case  Striker*/
      /*  Strikerstamina : {type: mongoose.Schema.Types.Number, ref: ' Striker.Physiological.Stamina'},
        StrikerPower : {type: mongoose.Schema.Types.Array, ref: ' Striker.Physiological.Power'},
        StrikerSpeed : {type: mongoose.Schema.Types.Array, ref: ' Striker.Physiological.Speed'},
        StrikerStrength : {type: mongoose.Schema.Types.Array, ref: ' Striker.Physiological.strength'},
        StrikerAgility : {type: mongoose.Schema.Types.Array, ref: ' Striker.Physiological.Agility'},



        StrikerVisonAwarnessSpace : {type: mongoose.Schema.Types.Array, ref: ' Striker.Tactical.Vision_awareness_of_space'},
        StrikerOrganisation : {type: mongoose.Schema.Types.Array, ref: ' Striker.Tactical.Organisation'},
        StrikerCommunication : {type: mongoose.Schema.Types.Array, ref: ' Striker.Tactical.Communication'},
        StrikerAnticipation : {type: mongoose.Schema.Types.Array, ref: ' Striker.Tactical.Anticipation'},



        StrikerTackle : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Def.Tackle'},
        StrikerPressingOpp : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Def.Pressing_opposition'},
        StrikerInterAnticipation : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Def.Interception_anticipation'},
        StrikerDefHeading : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Def.Heading'},


        StrikerAttPassing : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Att.Passing'},
        StrikerRunWithBall : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Att.Running_with_the_ball'},
        StrikerBallReception : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Att.Reception'},
        StrikerOffDribble : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Att.Dribbling'},
        StrikerOffSupportPlay : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Att.Support_play'},
        StrikerOffCrossing : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Att.Crossing'},
        StrikerOffShooting : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Att.shooting'},
        StrikerOffheading : {type: mongoose.Schema.Types.Array, ref: ' Striker.Technical_Att.heading'},


        StrikerConcentration : {type: mongoose.Schema.Types.Array, ref: ' Striker.Pschological.Concentration'},
        StrikerMotivation : {type: mongoose.Schema.Types.Array, ref: ' Striker.Pschological.Motivation'},
        StrikerAttitude : {type: mongoose.Schema.Types.Array, ref: ' Striker.Pschological.Attitude'},
        StrikerBodyLanguage : {type: mongoose.Schema.Types.Array, ref: 'Striker.Pschological.Body_Language'}, */


        /* Case WideMidfielder*/
      /*  WideMidfieldstamina : {type: mongoose.Schema.Types.Number, ref: ' WideMidfield.Physiological.Stamina'},
        WideMidfieldPower : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Physiological.Power'},
        WideMidfieldSpeed : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Physiological.Speed'},
        WideMidfieldStrength : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Physiological.strength'},



        WideMidfieldVison : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Tactical.Vision'},
        WideMidfieldOrganisation : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Tactical.Organisation'},
        WideMidfieldCommunication : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Tactical.Communication'},



        WideMidfieldTackle : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Def.Tackle'},
        WideMidfieldPressingOpp : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Def.Pressing_opposition'},
        WideMidfieldInterAnticipation : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Def.Interception_anticipation'},
        WideMidfieldDefHeading : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Def.Heading'},
        WideMidfieldDefCoverFullBack : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Def.Cover_full_back'},



        WideMidfieldAttPassing : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Att.Passing'},
        WideMidfieldRunWithBall : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Att.Running_with_the_ball'},
        WideMidfieldBallControl : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Att.Ball_control_with_ball'},
        WideMidfieldOffDribble : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Att.Dribbling'},
        WideMidfieldOffSupportPlay : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Att.Support_play'},
        WideMidfieldOffCrossing : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Att.Crossing'},
        WideMidfieldOffShooting : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Att.shooting'},
        WideMidfieldOffheading : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Technical_Att.heading'},


        WideMidfieldConcentration : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Pschological.Concentration'},
        WideMidfieldMotivation : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Pschological.Motivation'},
        WideMidfieldAttitude : {type: mongoose.Schema.Types.Array, ref: ' WideMidfield.Pschological.Attitude'},
        WideMidfieldBodyLanguage : {type: mongoose.Schema.Types.Array, ref: 'WideMidfield.Pschological.Body_Language'}, */



});

module.exports = mongoose.model('Profile', profileSchema)


      /* first_name: {
                type: String,
                trim: true,
                
        },
        last_name: {
                type: String,
                trim: true,
                
        }, 
        Date_of_birth: {
                type: Date,
                default: Date.now
        },
        phone_number: {
                type: String,
                validate: {
                        validator: function (v) {
                                return /\d{3}-\d{3}-\d{4}/.test(v);
                        },
                        message: '{VALUE} is not a valid phone number!'
                }
        },
        /* Position: [{
                type: Schema.Types.ObjectId,
                ref: 'PlayerPosition'
        }],
        Dominant_leg: {
                right: String,
                left: String

        },
        Email_address: {
                type: String,
                trim: true,
                lowercase: true,
                unique: true,
                required: 'Email address is required',
                validate: [validateEmail, 'Please fill a valid email address'],
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        } */
