const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UserSchema = new Schema({

    firstName: {
        type:  String,
        required: [true, "first name is required"]
    },
    lastName: {
        type:  String,
        required: [true, "last name is required"]
    },
    email: {
        type:  String,
        unique: true,
        required: [true, "email is required"]
    }, 
    phone: {
        type: String,
        required: [true, "phone is required"]
    },
    gender: {
        type: String,
        required: [true, "gender is required"]
    },
    state: {
        type: String,
        required: [true, "state is required"]
    },
    city: {
        type: String,
        required: [true, "city is required"]
    },
    profilePic: {
        type: String,
        required: [true, "profile is required"]
    },
    deleted: {
        type: Boolean,
        default: false
    },
    password:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('User', UserSchema);