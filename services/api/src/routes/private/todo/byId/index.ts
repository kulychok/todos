import Router = require('koa-router');
import patch from './patch';
import get from './get';
import del from './delete';

const byId = new Router();

byId.get('/', get);
byId.patch('/', patch);
byId.delete('/', del);

export = byId.routes();
