const { StatusCodes } = require('http-status-codes');
const {
    getAllCategories, createCategories,getOneCategories,
    updateCatgories,deleteCategories,


} = require('../../../services/mongoose/categories')

//create
const create = async(req, res, next) => {
    try {
        // const { name } = req.body;
        const result = await createCategories(req);
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
        const result = await getAllCategories();
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
        const result = await getOneCategories(req);
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
       const result = await updateCatgories(req);
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
    const result = await deleteCategories(req);
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