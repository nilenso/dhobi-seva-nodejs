const express = require('express');
const courseRoutes = require('./courseRoutes');

const router = express.Router();

courseRoutes(router);

//userRoutes(router)

module.exports = router;
