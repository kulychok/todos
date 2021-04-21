require('dotenv').config();

import Koa = require('koa');
import bodyParser = require('koa-body-parser');
import corsRules from './middleware/cors';
import errorHandler from './middleware/globalErrorHandler';
import routes = require('./routes');
import connect from './middleware/db';

const start = () => {
  const app = new Koa();

  const PORT = process.env.PORT;

  app.use(corsRules);
  app.use(errorHandler);

  app.use(bodyParser());
  app.use(routes);

  connect();

  const server = app.listen(PORT);
  console.log(`Server started on ${PORT} port!`);

  return { app, server };
};

const { app, server } = start();

export { app, server };
