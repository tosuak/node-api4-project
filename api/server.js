const express = require('express');
const usersRouter = require('./Users/users-router');
const loginRouter = require('./Login/login-router');
const registerRouter = require('./Register/register-router');

const server = express();

server.use(express.json());
server.use('/api/users', usersRouter);
server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);

module.exports = server;