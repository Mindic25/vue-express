const mongoose = require('mongoose');



const AttackMidSchema = new mongoose.Schema({ 
        _id: mongoose.Schema.Types.ObjectId,
     //   profile: {type: mongoose.Schema.ObjectId, ref: 'Profile', required: true},
 /* physiology  */              
                stamina: [Number],
                strength: [Number],
                power: [Number],
                speed: [Number],
         
/* Tactical */
                vision: [Number],
                organisation: [Number],
                communication: [Number],
   
/* Technical_Def */
                tackle: [Number],
                pressing_opposition: [Number],
                interception_anticipation: [Number],
                def_heading: [Number],

/*  Technical_Att */
                passing: [Number],
                running_with_the_ball: [Number],
                ball_control_with_feet: [Number],
                dribbling: [Number],
                support_play: [Number],
                crossing: [Number],
                shooting: [Number],
                off_heading: [Number],
        
/*Psychological */
                concentration: [Number],
                motivation: [Number],
                attitude: [Number],
                body_Language: [Number]
        

});
        const AttackMidfield = mongoose.model("AttackMidfield", AttackMidSchema)
module.exports = AttackMidfield