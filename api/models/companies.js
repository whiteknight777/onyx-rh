const mongoose = require('mongoose');
const Addresses = require('./addresses');

const companies = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    registrationNumber: { type: String, required: false },
    name: { type: String, required: true },
    staffNumber: { type: Number, required: false },
    addresses: [{ type: Addresses, required: true }],
    socialCapital: { type: String, required: false },
    website: { type: String, required: false },
    rcsCity: { type: String, required: false },
    rcsNumber: { type: String, required: false },
    siret: { type: String, required: false }
});

module.exports = mongoose.model('Companies', companies);
