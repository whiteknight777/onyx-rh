const mongoose = require('mongoose');
const Staffs = require('./collaborators');

const bankInformations = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    staff: { type: Staffs, required: true },
    type: { type: String, required: false },
    iban: { type: String, required: false },
    bic: { type: String, required: false },
    Domiciliation: { type: String, required: false }
});

module.exports = mongoose.model('BankInformations', bankInformations);
