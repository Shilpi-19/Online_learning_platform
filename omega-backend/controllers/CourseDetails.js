const Course = require('../models/CourseDetails');

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createCourse = async (req, res) => {
    try {
        const course = new Course({
            title: req.body.title,
            description: req.body.description,
            duration: req.body.duration
        });
        const newCourse = await course.save();
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getCourses, createCourse };
