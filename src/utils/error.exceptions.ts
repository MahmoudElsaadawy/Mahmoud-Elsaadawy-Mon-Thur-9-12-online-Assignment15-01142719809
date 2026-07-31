import { Request, Response, NextFunction } from "express"

export interface IError extends Error {
  statusCode: number
}

export class AppError extends Error {
  constructor(message: string, options: ErrorOptions, public statusCode: number){
    super(message, options)
  }
}

export class NotFoundException extends AppError {
  constructor(message: string = "not found", options: ErrorOptions = {}){
    super(message, options, 404)
  }
}

export class BadRequestException extends AppError {
  constructor(message: string, options: ErrorOptions = {}){
    super(message, options, 400)
  }
}

export const globalErrorHandler = (err: IError, req: Request, res: Response, next: NextFunction)=> {
  res.status(err.statusCode).json({
    errMessage: err.message,
    status: err.statusCode,
    stack: err.stack
  })
}