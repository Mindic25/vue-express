const mongoose = require('mongoose');



const centerBackSchema = new mongoose.Schema({ 



        Physiological: {
                Height: Number,
                Strength: Number,
                Speed: Number,
                Stamina: Number,
                Power: Number

        },
        Tactical: {
                Vision: Number,
                Organisation: Number,
                Communication: Number,
                Passing: Number

        },
        Technical_Def: {
                Tackle: Number,
                Pressing_opposition: Number,
                Interception_anticipation: Number,
                Clearance: Number,
                Defensive_header: Number,

        },
        Technical_Att: {
                Passing: Number,
                Heading: Number,
                Dribbling: Number,
                Running_of_the_ball: Number,
                Support_play: Number,
                Crossing: Number,
                Shooting: Number
        },
        Psychological: {
                Concentration: Number,
                Motivation: Number,
                Attitude: Number,
                Body_Language: Number
        },

        
});
        const CenterBack = mongoose.model("CenterBack",centerBackSchema)
module.exports = CenterBack