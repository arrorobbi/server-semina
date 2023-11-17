const Categories = require('../../api/v1/categories/model');
const { BadRequestError, NotFoundError } = require('../../errors');


const getAllCategories = async (req) => {
    const result = await Categories.find();
    return result;
};

const createCategories = async (req) => {

    const { name } = req.body;
    
    const check = await Categories.findOne({name});
    if (check) throw new BadRequestError('Duplicated Categories Name');
    const result = await Categories.create({ 
        name});
    return result;
};

const getOneCategories = async (req) =>{
    const { id } = req.params;
    const result = await Categories.findOne({ 
        _id: id,
        organizer: req.user.organizer
    });

    if(!result) throw new NotFoundError(`ID Categories not Found : ${id}`);
    return result;

};

const updateCatgories = async (req) => {
    const { id } = req.params;
    const { name } = req.body;

    const check = await Categories.findOne({
        name,
        _id: { $ne: id },
        organizer: req.user.organizer
    });

    if (check) throw new BadRequestError('Duplicated Category');

    const result = await Categories.findOneAndUpdate(
        { _id: id },
        { name },
        { new: true, runValidators: true}
    );

    if (!result) throw new NotFoundError(`Not Found Category with id: ${id}`);
    return result;
};

const deleteCategories = async (req) => {
    const { id } = req.params;
    const result = await Categories.findOne({
        _id: id,
        organizer: req.user.organizer
    });

    if (!result) throw new NotFoundError('Categories Not Found');

    await result.remove();

    return result;
};

const checkingCategories = async (id) => {
    const result = await Categories.findOne({ 
        _id: id,
        organizer: req.user.organizer
    });
  
    if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);
  
    return result;
  };

module.exports = { 
    getAllCategories,
    createCategories,
    getOneCategories,
    updateCatgories,
    deleteCategories,
    checkingCategories,
};