const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    number: {
        type: 'number',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    cpassword: {
        type: 'string',
        required: true
    }
});

// encryption method (middleware)
userSchema.pre('save', async function (next) {

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    
    next();
});

const User = mongoose.model('REG', userSchema);

module.exports = User
