const { StatusCodes } = require('http-status-codes');
const {
    createUser
} = require('../../../services/mongoose/users')

//create
const createCMSUser = async(req, res, next) => {
    try {
        const result = await createUser(req);
        res.status(StatusCodes.CREATED).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createCMSUser
};
