const Express = require('express');
const AuthController = require('../controllers/auth');

module.exports = expressInstance => {
    expressInstance.post('/api/auth/register', AuthController.register);
    expressInstance.post('/api/auth/login', AuthController.login);
};