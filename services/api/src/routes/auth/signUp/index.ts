import Router = require('koa-router');
import post = require('./post');

const signUp = new Router();

signUp.post('/signup', post);

export = signUp.routes();
