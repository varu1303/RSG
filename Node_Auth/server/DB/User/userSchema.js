const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    password: String,
    ssn: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;

