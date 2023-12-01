const Users = require('../../api/v1/users/model');
const {BadRequestError} = require('../../errors');


const createUser = async (req) =>{
    const { email, password, confirmPassword, name} = req.body;
    if (password !== confirmPassword){
        throw new BadRequestError('Password not Match With confirmPassword');
    }
  
    const users = await Users.create({
        email,
        name,
        password,
    });
    delete users._doc.password;

    return users;

};


module.exports = {createUser};