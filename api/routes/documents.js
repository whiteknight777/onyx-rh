const express = require('express');

const router = express.Router();
const DocumentsFixtures = require('../fixtures/documentsFixtures');

// Get collaborators Data
router.post('/list', async (req, res) => {
    const { slug } = req.body;
    const response = DocumentsFixtures
        .filter(e => (e.parent === 'root' && e.slug === slug));
    res.status(200).json(response);
});

// Find document
router.post('/find', async (req, res) => {
    const { slug } = req.body;
    const response = DocumentsFixtures
        .filter(e => e.parent === slug);
    res.status(200).json(response);
});

// Find document
router.post('/go-parent', async (req, res) => {
    const { slug } = req.body;
    const currentFolder = DocumentsFixtures
        .find(e => e.slug === slug);
    const response = DocumentsFixtures
        .filter(e => e.parent === currentFolder.parent);
    res.status(200).json(response);
});

module.exports = router;
