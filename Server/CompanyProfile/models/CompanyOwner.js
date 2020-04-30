const mongoose = require('mongoose');
const CompanyOwnerSchema = mongoose.Schema({
    CompanyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    OwnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    StockShareQuantity: {
        type: Number,
        require: false
    },
    CreateDateTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('CompanyOwner', CompanyOwnerSchema);