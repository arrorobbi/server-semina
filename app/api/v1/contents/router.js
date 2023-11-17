const express = require('express');
const router = express();
const { create, index, find, update, destroy, } = require('./contoller');
// const {
//     // authorizeRoles, 
//     authenticateUser,
// } = require('../../../middlewares/auth');

router.get('/contents', index);
router.get('/contents/:id', find);
router.put('/contents/:id', update);
router.delete('/contents/:id', destroy);
router.post('/contents', create);

module.exports = router;
