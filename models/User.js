const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        default: '',
    },
    approver: {
        type: String,
        default: '',
    },
    policy: {
        type: Number,
        default: 20,
    },
    role: {
        type: String,
        default: 'user',
    },
    position: {
        type: String,
        default: 'developer',
    },
});

module.exports = User = mongoose.model('users', UserSchema);
