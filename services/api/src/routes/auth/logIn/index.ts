import router = require('koa-router');
import post = require('./post');

const logIn = router();

logIn.post('/login', post);

export = logIn.routes();
