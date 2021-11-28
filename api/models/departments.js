const mongoose = require('mongoose');
const Addresses = require('./addresses');
const DepartmentsLink = require('./departmentsLink');
const Users = require('./users');

const departments = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    description: { type: String, required: false },
    name: { type: String, required: true },
    color: { type: String, required: false },
    links: { type: DepartmentsLink, required: false, default: null },
    addresses: [{ type: Addresses, required: true }],
    manager: { type: Users, required: false },
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

module.exports = mongoose.model('Departments', departments);
