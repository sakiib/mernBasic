const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// create a single student
router.post('/', async (req, res) => {
    const student = new Student({
        name: req.body.name,
        email: req.body.email
    });

    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch(err) {
        res.status(500).json({ 
            message: err.message
        });
    }
});

module.exports = router;