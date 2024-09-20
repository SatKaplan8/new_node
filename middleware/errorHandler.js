const { constants } = require("../routes/constants");

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.FORBIDDEN_ERROR: res.json({
            title: 'Forbidden error', message: error.message,
            stackTrace: error.stack
        });
            break;
        case constants.NOT_FOUND: res.json({
            title: 'Not Found', message: error.message,
            stackTrace: error.stack
        })
            break;
        case constants.UNAUTHORIZED_ACCESS: res.json({
            title: 'Unauthorized access', message: error.message,
            stackTrace: error.stack
        })
            break;

        case constants.VALIDATION_ERROR: res.json({
            title: 'Validation error', message: error.message,
            stackTrace: error.stack
        })

            break;
        case constants.INTERNAL_SERVER_ERROR: res.json({
            title: 'Internal error',
            message: error.message,
            stackTrace: error.stack
        })

        default:  
            break;
    }
}

module.exports = { errorHandler }