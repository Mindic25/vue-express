const mongoose = require('mongoose');



const GoalkeeperSchema = new mongoose.Schema({

        _id: mongoose.Schema.Types.ObjectId,

        first: String,
        last: String,
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

        /*  Physiological */

        strengh: [Number],
        power: [Number],
        agility: [Number],
        coordination: [Number],
        reaction_time: [Number],


        /*   Tactical */

        vision: [Number],
        organisation: [Number],
        communication: [Number],
        distribution: [Number],

        /*  Technical_Def */
        shot_stopping: [Number],
        coordination: [Number],
        recovery: [Number],
        speed: [Number],
        saves: [Number],
        punch: [Number],

        /*  Technical_Att */
        passing: [Number],
        throwing: [Number],
        ball_control_with_feet: [Number],
        kick: [Number],
        tackle: [Number],

        /*  Psychological */
        concentration: [Number],
        motivation: [Number],
        attitude: [Number],
        body_Language: [Number]



});
const Goalkeeper = mongoose.model("Goalkeeper", GoalkeeperSchema)
module.exports = Goalkeeper