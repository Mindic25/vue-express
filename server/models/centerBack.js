const mongoose = require('mongoose');



const centerBackSchema = new mongoose.Schema({ 


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
                passing: [Number],
                heading: [Number],
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
        const CenterBack = mongoose.model("CenterBack",centerBackSchema)
module.exports = CenterBack