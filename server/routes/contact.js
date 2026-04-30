const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact — save a new contact/demo request
router.post('/', async (req, res) => {
  const { name, email, course, message } = req.body;

  if (!name || !email || !course || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  try {
    const contact = await Contact.create({ name, email, course, message });
    res.status(201).json({ success: true, id: contact._id });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const msg = Object.values(err.errors).map(e => e.message).join(', ');
      return res.status(400).json({ success: false, error: msg });
    }
    console.error('Contact save error:', err);
    res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// GET /api/contact — list all submissions (admin use)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

module.exports = router;
