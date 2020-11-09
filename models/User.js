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
        default: Date.now.toString(),
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
});

module.exports = User = mongoose.model('users', UserSchema);
