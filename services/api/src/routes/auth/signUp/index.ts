import router = require('koa-router');
import post = require('./post');

const signUp = router();

signUp.post('/signup', post);

export = signUp.routes();
