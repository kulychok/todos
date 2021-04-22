import Router = require('koa-router');
import todo = require('./todo');
import user = require('./user');

const privateRoutes = new Router();

privateRoutes.use('/todo', todo);
privateRoutes.use('/user', user);

export = privateRoutes.routes();
