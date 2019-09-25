const mongoose = require('mongoose');



const GoalkeeperSchema = new mongoose.Schema({ 


        
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
                throw: [Number],
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