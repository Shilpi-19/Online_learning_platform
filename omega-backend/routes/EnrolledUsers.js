const express = require('express');
const router = express.Router();
const { getEnrolledUsers, createEnrolledUser } = require('../controllers/EnrolledUsers');

router.get('/', getEnrolledUsers);
router.post('/', createEnrolledUser);

module.exports = router;
