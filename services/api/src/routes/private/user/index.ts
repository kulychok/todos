import router = require('koa-router');
import get = require('./get');

const userRoutes = router();

userRoutes.get('/', get);

export = userRoutes.routes();
