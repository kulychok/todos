import router = require('koa-router');
import getActive = require('./getActive');
import getCompleted = require('./getCompleted');

const filterRoutes = router();

filterRoutes.get('/active', getActive);

filterRoutes.get('/completed', getCompleted);

export = filterRoutes.routes();
