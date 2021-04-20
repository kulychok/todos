import router = require('koa-router');
import getAccessToken = require('./getAccessToken');
import logIn = require('./logIn');
import signUp = require('./signUp');

const authRoutes = router();

authRoutes.use(signUp);
authRoutes.use(logIn);

authRoutes.post('/token', getAccessToken);

export = authRoutes.routes();
