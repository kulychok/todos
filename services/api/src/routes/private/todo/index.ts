import Router = require('koa-router');
import post = require('./post');
import byId = require('./byId');
import get = require('./get');
import filters = require('./filters');

const todoRoutes = new Router();

todoRoutes.post('/', post);
todoRoutes.get('/', get);

todoRoutes.use(filters);
todoRoutes.use('/:id', byId);

export = todoRoutes.routes();
