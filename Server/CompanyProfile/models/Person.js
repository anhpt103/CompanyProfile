const mongoose = require('mongoose');
const PersonSchema = mongoose.Schema({
    PersonId: {
        type: String,
        require: true
    },
    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    BirthDate: {
        type: Date,
        require: false
    },
    GenderCode: {
        type: Number,
        require: true
    },
    PhoneNumber: {
        type: String,
        require: false
    },
    CreateDateTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Person', PersonSchema);