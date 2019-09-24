const mongoose = require('mongoose');



const AttackMidSchema = new mongoose.Schema({ 


        Physiological: {
                Stamina: [Number],
                Strengh: [Number],
                Power: [Number],
                Speed: [Number]
                },
        Tactical: {
                Vision: [Number],
                Organisation: [Number],
                Communication: [Number]

        },
        Technical_Def: {
                Tackle: [Number],
                Pressing_opposition: [Number],
                Interception_anticipation: [Number],
                Heading: [Number]

        },
        Technical_Att: {
                Passing: [Number],
                Running_with_the_ball: [Number],
                Ball_control_with_feet: [Number],
                Dribbling: [Number],
                Support_play: [Number],
                Crossing: [Number],
                Shooting: [Number],
                Heading: [Number],
        },
        Psychological: {
                Concentration: [Number],
                Motivation: [Number],
                Attitude: [Number],
                Body_Language: [Number]
        },

});
        const AttackMidd = mongoose.model("AttackMidd", AttackMidSchema)
module.exports = AttackMidd