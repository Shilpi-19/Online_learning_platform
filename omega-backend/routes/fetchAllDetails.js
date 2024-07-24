const express = require('express');
const router = express.Router();
const { fetchAllDetails } = require('../controllers/fetchAllDetails');

router.get('/', fetchAllDetails);

module.exports = router;
