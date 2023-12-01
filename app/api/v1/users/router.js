const express = require('express');
const router = express();
const { createCMSUser } = require('./controller');

router.post('/users', createCMSUser);

module.exports = router;