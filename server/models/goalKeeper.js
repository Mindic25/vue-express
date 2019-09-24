const mongoose = require('mongoose');



const GoalkeeperSchema = new mongoose.Schema({ 


    
        Physiological: {
                Height: Number,
                Strengh: Number,
                Power: Number,
                Agility: Number,
                Coordination: Number,
                Reaction_Time: Number,
                
        },
        Tactical: {

                Vision: Number,
                Organisation: Number,
                Communication: Number,
                Distribution: Number
        },
        Technical_Def: {
                Shot_stopping: Number,
                Coordination: Number,
                Recovery: Number,
                Speed: Number,
                Save: Number,
                Punch: Number
        },
        Technical_Att: {
                Passing: Number,
                Throw: Number,
                Ball_control_with_feet: Number,
                Kick: Number,
                Tackle: Number
        },
        Psychological: {
                Concentration: Number,
                Motivation: Number,
                Attitude: Number,
                Body_Language: Number
        },


});
        const Goalkeeper = mongoose.model("Goalkeeper", GoalkeeperSchema)
module.exports = Goalkeeper