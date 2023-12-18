const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, `first name is required`],
        maxLength: 3,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, `last name is required`],
        maxLength: 3,
    },
    email: {
        type: String,
        trim: true,
        required: [true, `email is required`],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
        maxLength: [6, 'password must have at least (6) characters']
    }, 
    role: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

// Encrypting password before saving
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

module.exports = mongoose.model("User", userSchema)