const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { model, Schema } = mongoose;

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Nama Harus Diisi"],
            minlength: 3,
            maxlength: 50,
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Email Harus Diisi"],
        },
        password: {
            type: String,
            required: [true, "Harus Membuat Password"],
            minlength: 6,
        },
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next){
    const User = this;
    if (User.isModified('password')){
        User.password = await bcrypt.hash(User.password, 12);
    };
    next();
});

userSchema.methods.comparePassword=  async function (canditatePassword){
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};

module.exports = mongoose.model('User', userSchema);