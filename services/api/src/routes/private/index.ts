import router = require('koa-router');
import todo = require('./todo');
import user = require('./user');

const privateRoutes = router();

privateRoutes.use('/todo', todo);
privateRoutes.use('/user', user);

export = privateRoutes.routes();
