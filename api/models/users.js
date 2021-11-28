const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    companyToken: {
        type: String,
        required: false
    },
    roles: {
        type: Array,
        required: true
    },
    pic: {
        type: String,
        required: false
    },
    fullname: {
        type: String,
        required: false,
        default: `${this.firstname} ${this.lastname}`
    },
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    occupation: {
        type: String,
        required: false
    },
    companyName: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    language: {
        type: String,
        required: false
    },
    timeZone: {
        type: String,
        required: false
    },
    isEnabled: {
        type: Boolean,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('Users', userSchema);
