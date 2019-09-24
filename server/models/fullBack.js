const mongoose = require('mongoose');



const FullbackSchema = new mongoose.Schema({ 



        Physiological: {
                Speed: Number,
                Stamina: Number,
                Power: Number

        },
        Tactical: {
                support_play: Number,
                When_to_cross: Number,
                Passing: Number,
                Running_of_the_ball: Number,
                Forcing_offside: Number
        },
        Technical_Def: {
                Tackle: Number,
                Pressing_opposition: Number,
                Interception_anticipation: Number,
                Clearance: Number,
                Defensive_header: Number,

        },
        Technical_Att: {
                Dribbling: Number,
                Running_of_the_ball: Number,
                Clearance: Number,
                Offensive_header: Number
        },
        Psychological: {
                Concentration: Number,
                Motivation: Number,
                Attitude: Number,
                Body_Language: Number
        },
        

});
        const Fullback = mongoose.model("Fullback", FullbackSchema)
module.exports = Fullback