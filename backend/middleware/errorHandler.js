import { constants } from '../Constants/constants.js' // Ensure this import works

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;

    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
            break;
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized", message: err.message, stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
            break;
        case constants.SERVER_ERROR:
            res.json({ title: "Server Error", message: err.message, stackTrace: err.stack });
            break;
        default:
            console.log("All good!");
            res.json({ message: err.message, stackTrace: err.stack });
            break;
    }
};

export { errorHandler }; // Export as a named export
