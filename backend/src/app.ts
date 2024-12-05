import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import {
  unknownEndpoint,
  errorHandler,
  requestLogger,
} from './utils/middleware';
import paintingsRouter from './controllers/paintings';

const app = express();
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(requestLogger);

app.use('/api/paintings', paintingsRouter);

// if (process.env.NODE_ENV === 'test') {
//   import testingRouter from './controllers/testing';
//   app.use('/api/testing', testingRouter);
// }

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
