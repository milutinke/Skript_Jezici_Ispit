const AuthService = require('../services/auth');
const JWT = require('jsonwebtoken');
const Configs = require('../config');

class AuthMiddleware {
    async handle(req, res, next) {
        if (!req.headers.authorization || (req.headers.authorization && !req.headers.authorization.toLowerCase().startsWith('bearer ')))
            return res.status(403).json({
                forbidden: true,
                error: 'Forbidden 1!'
            });

        const token = req.headers.authorization.trim().split(' ')[1];

        if (!token || (token && token.length === 0))
            return res.status(403).json({
                forbidden: true,
                error: 'Forbidden 2!'
            });

        JWT.verify(token, Configs.JWT.secret, async (error, user) => {
            if (error || !error && !(await AuthService.findUserByEmail(user.email)))
                return res.status(403).json({
                    forbidden: true,
                    error: 'Forbidden 3!'
                });

            req.user = user;
            next();
        });
    }
}

module.exports = new AuthMiddleware();