const express = require('express');
const router = express();
const { create, index, find, update, destroy, } = require('./contoller');
const {
    // authorizeRoles, 
    authenticateUser,
} = require('../../../middlewares/auth');
// const {
//     // authorizeRoles, 
//     authenticateUser,
// } = require('../../../middlewares/auth');

router.get('/contents',authenticateUser, index);
router.get('/contents/:id',authenticateUser, find);
router.put('/contents/:id',authenticateUser, update);
router.delete('/contents/:id',authenticateUser, destroy);
router.post('/contents',authenticateUser, create);

module.exports = router;
