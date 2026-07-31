"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = exports.BadRequestException = exports.NotFoundException = exports.AppError = void 0;
class AppError extends Error {
    statusCode;
    constructor(message, options, statusCode) {
        super(message, options);
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
class NotFoundException extends AppError {
    constructor(message = "not found", options = {}) {
        super(message, options, 404);
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends AppError {
    constructor(message, options = {}) {
        super(message, options, 400);
    }
}
exports.BadRequestException = BadRequestException;
const globalErrorHandler = (err, req, res, next) => {
    res.status(err.statusCode).json({
        errMessage: err.message,
        status: err.statusCode,
        stack: err.stack
    });
};
exports.globalErrorHandler = globalErrorHandler;
