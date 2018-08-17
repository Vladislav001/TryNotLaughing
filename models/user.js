const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

userSchema.virtual('userId').get(function(){
    return this._id;
});

var User = mongoose.model('User', userSchema);

module.exports = User;
