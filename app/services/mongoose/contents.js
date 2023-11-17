const Content = require('../../api/v1/contents/model');
const { BadRequestError, NotFoundError } = require('../../errors');


const getAllContents = async (req) => {
    const result = await Content.find();
    return result;
};

const createContents = async (req) => {

    const { title, news, location, author, category} = req.body;
    
    const check = await Content.findOne({title});
    if (check) throw new BadRequestError(`Duplicated Contents With Title : ${title}`);
    const result = await Content.create({ 
        title,
        news,
        location,
        author,
        category
    });
    return result;
};

const getOneContents = async (req) =>{
    const { id } = req.params;
    const result = await Content.findOne({ 
        _id: id,
        // organizer: req.user.organizer
    });

    if(!result) throw new NotFoundError(`ID Contents not Found : ${id}`);
    return result;

};

const updateContents = async (req) => {
    const { id } = req.params;
    const { title, news, location, author, category } = req.body;

    const check = await Content.findOne({
        title,
        _id: { $ne: id },
    });

    if (check) throw new BadRequestError(`Duplicated Content`);

    const result = await Content.findOneAndUpdate(
        { _id: id },
        { title, news, location, author, category },
        { new: true, runValidators: true}
    );

    if (!result) throw new NotFoundError(`Not Found Content with id: ${id}`);
    return result;
};

const deleteContents = async (req) => {
    const { id } = req.params;
    const result = await Content.findOne({
        _id: id,
        // organizer: req.user.organizer
    });

    if (!result) throw new NotFoundError('Contents Not Found');

    await result.remove();

    return result;
};

module.exports = { 
    getAllContents,
    createContents,
    getOneContents,
    updateContents,
    deleteContents
};