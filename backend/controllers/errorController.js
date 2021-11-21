const AppError = require('../utils/appError')   

const handleCastErrorDB = error => {
    const message = `Invalid ${error.path}: ${error.value}.`
    return new AppError(message, 400)
}

const handleDuplicateFieldsDB = error => {
    const value = error.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    console.log(value)

    const message = `Duplicate Field value: ${value}. Please use another value!`
    return new AppError(message, 404)
}

const handleValidationErrorDB = error => {
    const errors = Object.values(error.errors).map(el => el.message)

    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400)
}

const handleJWTError = () => new AppError('Invalid token. please log in again', 401)

const handleJWTExpiredError = () => new AppError('Your Token has expired! Please log in again  ', 401)



const sendErrorProd = (error,req, res) => {
    if (error.isOperational){
        res.status(error.statusCode).json({
            status: error.status,
            message: error.message,
        }) 
    } else {
        console.error('ERROR ', error )

        res.status(500).json({
            status: 'error',
            message: 'Something went very wrong'
        })
    }  
}


const sendErrorDev = (error, req, res) => {
    res.status(error.statusCode).json({
        status: error.status,
        error: error,
        message: error.message,
        stack: error.stack
    })
}

module.exports = ( error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error'

    if(process.env.NODE_ENV === 'development'){
        sendErrorDev(error,req, res)
    } else if (process.env.NODE_ENV === 'production'){
        // let err = { ...error }
        if(error.name === 'CastError') error = handleCastErrorDB(error)
        if(error.code === 11000) error = handleDuplicateFieldsDB(error)
        if(error.name === 'ValidationError') error = handleValidationErrorDB(error)
        if(error.name === 'JsonWebTokenError') error = handleJWTError()
        if(error.name === 'TokenExpiredError') error = handleJWTExpiredError()

       sendErrorProd(error,req, res)
    }
}