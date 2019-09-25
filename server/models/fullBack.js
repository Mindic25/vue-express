const mongoose = require('mongoose');



const FullbackSchema = new mongoose.Schema({ 

      
       /* Physiological*/ 
                Speed: [Number],
                Stamina: [Number],
                Power: [Number],

        
        /*Tactical*/ 
                support_play: [Number],
                when_to_cross: [Number],
                passing: [Number],
                running_of_the_ball: [Number],
                forcing_offside: [Number],
        
       /* Technical_Def*/ 
                Tackle: [Number],
                pressing_opposition: [Number],
                interception_anticipation: [Number],
                clearance: [Number],
                defensive_header: [Number],

        
       /* Technical_Att */ 
                dribbling: [Number],
                running_of_the_ball: [Number],
                clearance: [Number],
                Offensive_header: [Number],
        
       /* Psychological */ 
                concentration: [Number],
                motivation: [Number],
                attitude: [Number],
                body_Language: [Number]
        
        

});
        const Fullback = mongoose.model("Fullback", FullbackSchema)
module.exports = Fullback