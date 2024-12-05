import { info } from './logger';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const requestLogger = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  info('Method:', request.method);
  info('Path:  ', request.path);
  info('Body:  ', request.body);
  info('---');
  next();
};

const unknownEndpoint = (request: Request, response: Response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};
// Extend the built-in Error type to include custom properties if needed
interface ExtendedError extends Error {
  name: string;
  message: string;
  status?: number;
}

const errorHandler: ErrorRequestHandler = (
  error: ExtendedError,
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  if (error.name === 'CastError') {
    response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    response.status(400).json({ error: error.message });
  } else if (
    error.name === 'MongoServerError' &&
    error.message.includes('E11000 duplicate key error')
  ) {
    response.status(400).json({ error: 'expected `username` to be unique' });
  } else if (error.name === 'JsonWebTokenError') {
    response.status(401).json({ error: 'token invalid' });
  } else if (error.name === 'TokenExpiredError') {
    response.status(401).json({
      error: 'token expired',
    });
  } else if (error.name === 'FetchError') {
    response.status(500).json({
      error: 'Internal Server Error',
    });
  }

  next(error);
};

export { requestLogger, unknownEndpoint, errorHandler };
