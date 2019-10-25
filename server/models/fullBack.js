const mongoose = require('mongoose');



const FullbackSchema = new mongoose.Schema({ 

        _id: mongoose.Schema.Types.ObjectId,

        first: String,
        last:  String,
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
       /* Physiological*/ 
                speed: [Number],
                stamina: [Number],
                power: [Number],

        
        /*Tactical*/ 
                support_play: [Number],
                when_to_cross: [Number],
                passing: [Number],
                running_of_the_ball: [Number],
                forcing_offside: [Number],
        
       /* Technical_Def*/ 
                tackle: [Number],
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