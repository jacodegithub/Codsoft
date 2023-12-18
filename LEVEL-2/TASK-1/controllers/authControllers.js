
const User = require('../models/userModels')
const ErrorResponses = require('../utils/errorResponses')

exports.signup = (req, res, next) => {
    const {email} = res.body;
    const userExist = User.findOne({email});
    if(userExist) {
        return next(new ErrorResponses('Email already registered', 400))
    }

    try {
        const user = User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
    }
    catch(error) {
        next(error);
    }
}