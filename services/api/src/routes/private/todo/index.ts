import Router = require('koa-router');
import post = require('./post');
import byId = require('./byId');
import get = require('./get');
import del = require('./deleteCompleted');
import filters = require('./filters');
import patchToActive = require('./patchAllToActive');
import patchToCompleted = require('./patchAllToCompleted');

const todoRoutes = new Router();

todoRoutes.post('/', post);
todoRoutes.get('/', get);
todoRoutes.delete('/completed', del);
todoRoutes.patch('/active', patchToActive);
todoRoutes.patch('/completed', patchToCompleted);

todoRoutes.use(filters);
todoRoutes.use('/:id', byId);

export = todoRoutes.routes();
