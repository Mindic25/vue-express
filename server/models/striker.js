const mongoose = require('mongoose');



const StrikerSchema = new mongoose.Schema({

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
        strength: [Number],
        power: [Number],
        agility: [Number],
        speed: [Number],
        stamina: [Number],


        /*  Tactical */
        vision_awarness_of_space: [Number],
        organisation: [Number],
        communication: [Number],
        anticipation: [Number],

        /*   Technical_Def  */
        tackle: [Number],
        pressing_opposition: [Number],
        interception_anticipation: [Number],
        def_heading: [Number],


        /*    Technical_Att  */
        shooting: [Number],
        off_heading: [Number],
        reception: [Number],
        dribbling: [Number],
        passing: [Number],
        running_with_the_ball: [Number],
        support_play: [Number],
        crossing: [Number],

        /*  Psychological   */
        concentration: [Number],
        motivation: [Number],
        attitude: [Number],
        body_Language: [Number]




});
const Striker = mongoose.model("Striker", StrikerSchema)
module.exports = Striker