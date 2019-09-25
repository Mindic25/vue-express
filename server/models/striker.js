const mongoose = require('mongoose');



const StrikerSchema = new mongoose.Schema({ 


        playerProfile : {type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
      /*  Physiological */
                Strengh: [Number],
                Power: [Number],
                Agility: [Number],
                Speed: [Number],
                Stamina: [Number],

        
      /*  Tactical */
                Vision_awarness_of_space: [Number],
                Organisation: [Number],
                Communication: [Number],
                Anticipation: [Number],
        
    /*   Technical_Def  */
                Tackle: [Number],
                Pressing_opposition: [Number],
                Interception_anticipation: [Number],
                Heading: [Number],

        
    /*    Technical_Att  */
                Shooting: [Number],
                Heading: [Number],
                Reception: [Number],
                Dribbling: [Number],
                Passing: [Number],
                Running_with_the_ball: [Number],
                Support_play: [Number],
                Crossing: [Number],
        
      /*  Psychological   */
                Concentration: [Number],
                Motivation: [Number],
                Attitude: [Number],
                Body_Language: [Number]
        

        

});
        const Striker = mongoose.model("Striker", StrikerSchema)
module.exports = Striker