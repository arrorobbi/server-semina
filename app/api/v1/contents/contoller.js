const { StatusCodes } = require('http-status-codes');
const {
    getAllContents,
    createContents,
    getOneContents,
    updateContents,
    deleteContents


} = require('../../../services/mongoose/contents')

//create
const create = async(req, res, next) => {
    try {
        const result = await createContents(req);
        res.status(StatusCodes.CREATED).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

//get
const index = async(req, res, next) => {
    try {
        const result = await getAllContents(req);
        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
}

//find
const find = async (req, res, next) => {
    try {
        const result = await getOneContents(req);
        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
}

//update
const update = async(req, res, next) => {
    try {
       const result = await updateContents(req);
        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

//delete
const destroy = async(req, res, next) =>{
try {
    const result = await deleteContents(req);
    res.status(StatusCodes.OK).json({
        data: result,
    });
} catch (err) {
    next(err)
    
}
};

module.exports = {
    create,
    index,
    find, //find
    update,
    destroy,
    
};