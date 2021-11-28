const mongoose = require('mongoose');

const addresses = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: { type: String, required: false },
    country: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zipcode: { type: String, required: false },
    lat: { type: Number, required: false },
    lng: { type: Number, required: false },
    phone: { type: String, required: false },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Addresses', addresses);
