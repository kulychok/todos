import router = require('koa-router');
import checkAuthorization from '../middleware/checkAuth';
import authRoutes = require('./auth');
import privateRoutes = require('./private');

const routes = router();

routes.use('/private', checkAuthorization, privateRoutes);

routes.use('/auth', authRoutes);

export = routes.routes();
