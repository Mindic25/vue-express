const mongoose = require('mongoose');



const HoldmidfieldSchema = new mongoose.Schema({

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
        stamina: [Number],
        strengh: [Number],
        power: [Number],
        speed: [Number],



        /*   Tactical */
        vision: [Number],
        organisation: [Number],
        communication: [Number],


        /*  Technical_Def */
        tackle: [Number],
        pressing_opposition: [Number],
        interception_anticipation: [Number],
        def_heading: [Number],


        /*   Technical_Att */
        passing: [Number],
        running_with_the_ball: [Number],
        ball_control_with_feet: [Number],
        dribbling: [Number],
        support_play: [Number],
        crossing: [Number],
        shooting: [Number],
        off_heading: [Number],

        /*    Psychological  */
        concentration: [Number],
        motivation: [Number],
        attitude: [Number],
        body_Language: [Number]






});
const HoldmidFielder = mongoose.model("Holdmidfielder", HoldmidfieldSchema)
module.exports = HoldmidFielder