let mongoose = require('mongoose');



let profileSchema = new mongoose.Schema({

        first: String,
        last: String,
        DOB: Date,
        /* phone: {
                 type: String,
                 validate: {
                         validator: function (v) {
                                 return /\d{3}-\d{3}-\d{4}/.test(v);
                         },
                         message: '{VALUE} is not a valid phone number!'
                 }
         }, */
        email: {

                type: String,
                trim: true,
                lowercase: true,
                unique: true,
                required: true,
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
                message: '{VALUe} email is required or email is not valid'

        },
        password: {
                type: String,
                required: true
        }

});

module.exports = mongoose.model('Profile', profileSchema)


/* first_name: {
          type: String,
          trim: true,
          
  },
  last_name: {
          type: String,
          trim: true,
          
  }, 
  Date_of_birth: {
          type: Date,
          default: Date.now
  },
  phone_number: {
          type: String,
          validate: {
                  validator: function (v) {
                          return /\d{3}-\d{3}-\d{4}/.test(v);
                  },
                  message: '{VALUE} is not a valid phone number!'
          }
  },
  /* Position: [{
          type: Schema.Types.ObjectId,
          ref: 'PlayerPosition'
  }],
  Dominant_leg: {
          right: String,
          left: String

  },
  Email_address: {
          type: String,
          trim: true,
          lowercase: true,
          unique: true,
          required: 'Email address is required',
          validate: [validateEmail, 'Please fill a valid email address'],
          match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  } */