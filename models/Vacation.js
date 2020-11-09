const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VacationSchema = new Schema({
    type: {
        type: String,
        default: 'vacation',
    },
    email: {
        type: String,
        required: true,
    },
    dateStart: {
        type: String,
        default: '',
    },
    dateEnd: {
        type: String,
        default: '',
    },
    status: {
        type: String,
        default: 'pending',
    },
});

module.exports = Vacation = mongoose.model('vacations', VacationSchema);
