import Router = require('koa-router');
import post = require('./post');

const logIn = new Router();

logIn.post('/login', post);

export = logIn.routes();
