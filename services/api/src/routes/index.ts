import Router from 'koa-router';
import checkAuthorization from '../middleware/checkAuth';
import authRoutes = require('./auth');
import privateRoutes = require('./private');
import KoaBodyParser from 'koa-bodyparser';

const router = new Router();

router.use('/private', checkAuthorization, privateRoutes);

router.use('/auth', authRoutes);

export = router.routes();
