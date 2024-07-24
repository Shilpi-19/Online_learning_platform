const express = require('express');
const router = express.Router();
const { getCourses, createCourse } = require('../controllers/CourseDetails');

router.get('/', getCourses);
router.post('/', createCourse);

module.exports = router;
