const mongoose = require('mongoose');
const Departments = require('./departments');

const departmentsLink = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    department: { type: Departments, required: true },
    parent: { type: Departments, required: true, default: null },
    children: [{ type: Departments, required: true }],
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

module.exports = mongoose.model('DepartmentsLink', departmentsLink);
