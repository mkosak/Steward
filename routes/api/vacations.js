const express = require('express');
const router = express.Router();

// Load input validation
const validateRegisterInput = require('../../validation/add');

// Load Vacation model
const Vacation = require('../../models/Vacation');

// @route POST api/vacations/add
// @desc Add vacation
// @access Public
router.post('/add', (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Vacation.findOne({ email: req.body.email }).then((vacation) => {
        if (vacation) {
            return res.status(400).json({ email: 'Email already exists' });
        } else {
            const newVacation = new Vacation({
                type: req.body.name,
                email: req.body.email,
                dateStart: req.body.dateStart,
                dateEnd: req.body.dateEnd,
                status: 'pending',
            });

            // Save to database
            newVacation
                .save()
                .then((vacation) => res.json(vacation))
                .catch((err) => console.log(err));
        }
    });
});

// @route GET api/vacations
// @desc List vacations
// @access Public
router.get('/', (req, res) => {
    const { email } = req.query;

    // Check validation
    if (!email) {
        return res.status(400).json('Email not found');
    }

    // Find vacations by email
    Vacation.find({ email: { $eq: email } }).then((vacations) => {
        // Check if vac ation exists
        if (!vacations.length) {
            return res
                .status(404)
                .json({ vacationnotfound: 'Vacations not found' });
        }

        return res.status(200).json(vacations);
    });
});

module.exports = router;
