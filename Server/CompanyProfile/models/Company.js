const mongoose = require('mongoose');
const CompanySchema = mongoose.Schema({
    CompanyId: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    FoundingDate: {
        type: Date,
        default: Date.now
    },
    CreateDateTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Company', CompanySchema);