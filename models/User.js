const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    socialMediaHandle: {
        type: String,
        required: true,
    },
    images: [{
        type: String, 
        required: true,
    }],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
