const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    urlDb: process.env.URL_MONGODB_DEV,
    jwtExpiration: '1h',
    jwtSecret: process.env.JWT_SECRET
};