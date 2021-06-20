import Router = require('koa-router');
import get = require('./get');

const userRoutes = new Router();

userRoutes.get('/', get);

export = userRoutes.routes();
