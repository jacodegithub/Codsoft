const ErrorResponses = require('../utils/errorResponses');

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    error.message = err.message;

    if(err.name === "CastError") {
        const message = `Resource not fount ${err.value}`;
        error = new ErrorResponses(message, 404);
    }

    // Mangoose duplicate value
    if(err.code === 11000) {
        const message = `Duplicate field value entered`;
        error = new ErrorResponses(message, 400);
    }

    // Mongoose validation error
    if(err.name === `ValidationError`) {
        const message = Object.values(err.errors).map(val => ` `+ val.message);
        error = new ErrorResponses(message, 400);
    }

    res.status(error.statusCode || 500).json({
        succes: false,
        error: error.message || `server error`
    })

}

module.exports = errorHandler;