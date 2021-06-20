import Router = require('koa-router');
import getActive = require('./getActive');
import getCompleted = require('./getCompleted');

const filterRoutes = new Router();

filterRoutes.get('/active', getActive);

filterRoutes.get('/completed', getCompleted);

export = filterRoutes.routes();
