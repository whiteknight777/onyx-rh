const express = require('express');

const router = express.Router();
const StaffFixtures = require('../fixtures/staffFixtures');
const TeamsFixtures = require('../fixtures/teamsFixtures');
const AbsencesFixtures = require('../fixtures/absencesFixtures');

// Get collaborators Data
router.get('/staff', async (req, res) => {
    res.status(200).json(StaffFixtures);
});
router.post('/staff', async (req, res) => {
    const {
        address,
        phone,
        website,
        company,
        user,
        registrationNumber,
        birthday,
        nationality,
        cityOfbirth,
        birthDepartmentNumber,
        familySituation,
        numberOfchildren,
        bankInfos
    } = req.body;
});

// Get teams Data
router.get('/teams', async (req, res) => {
    res.status(200).json(TeamsFixtures);
});

// Get absences Data
router.get('/absences', async (req, res) => {
    res.status(200).json(AbsencesFixtures);
});

module.exports = router;
