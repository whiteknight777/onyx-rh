const mongoose = require('mongoose');
const Users = require('./users');
const Addresses = require('./addresses');
const BankInformations = require('./bankInformations');
const companies = require('./companies');
const Departments = require('./departments');

const collaboratorsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    address: [Addresses],
    personalWebsite: {
        type: String
    },
    company: {
        type: companies,
        required: true
    },
    user: {
        type: Users,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: false
    },
    nationality: {
        type: String,
        required: false
    },
    cityOfbirth: {
        type: String,
        required: false
    },
    birthDepartmentNumber: {
        type: Number,
        required: false
    },
    familySituation: {
        type: String,
        required: false
    },
    numberOfchildren: {
        type: Number,
        required: false
    },
    contractType: {
        type: String,
        required: false
    },
    salary: {
        type: String,
        required: false
    },
    averageDailyRate: {
        type: String,
        required: false
    },
    hireDate: {
        type: Date,
        required: false
    },
    contractEndDate: {
        type: Date,
        required: false
    },
    seniority: {
        type: Number,
        required: false
    },
    job: {
        type: String,
        required: false
    },
    externalCollaborator: {
        type: Boolean,
        required: false
    },
    missionStartDate: {
        type: Date,
        required: false
    },
    missionEndDate: {
        type: Date,
        required: false
    },
    society: {
        type: String,
        required: false
    },
    societyWebsite: {
        type: String,
        required: false
    },
    department: {
        type: Departments,
        required: true
    },
    bankInfos: [BankInformations],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('Collaborators', collaboratorsSchema);
