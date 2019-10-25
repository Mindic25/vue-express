const mongoose = require('mongoose');



const centerBackSchema = new mongoose.Schema({

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
        /*Physiological*/


        strength: [Number],
        speed: [Number],
        stamina: [Number],
        power: [Number],


        /*Tactical*/
        vision: [Number],
        organisation: [Number],
        communication: [Number],
        passing: [Number],

        /* Technical_Def */
        tackle: [Number],
        pressing_opposition: [Number],
        interception_anticipation: [Number],
        clearance: [Number],
        defensive_header: [Number],

        /* Technical_Att */

        off_heading: [Number],
        dribbling: [Number],
        running_of_the_ball: [Number],
        support_play: [Number],
        crossing: [Number],
        shooting: [Number],

        /*  Psychological */
        concentration: [Number],
        motivation: [Number],
        attitude: [Number],
        body_Language: [Number]



});
const CenterBack = mongoose.model("CenterBack", centerBackSchema)
module.exports = CenterBack