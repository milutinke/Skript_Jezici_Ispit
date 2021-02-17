const AuthService = require('../services/auth');
const JWT = require('jsonwebtoken');
const Configs = require('../config');

const Forbidden = Symbol();

class AuthMiddleware {
    async handle(req, res, next) {
        if (!req.headers.authorization || (req.headers.authorization && !req.headers.authorization.toLowerCase().startsWith('bearer ')))
            return this[Forbidden](res);

        const token = req.headers.authorization.trim().split(' ')[1];

        if (!token || (token && token.length === 0))
            return this[Forbidden](res);

        JWT.verify(token, Configs.JWT.secret, async (error, user) => {
            if (error || !error && !(await AuthService.findUserByEmail(user.email)))
                return this[Forbidden](res);

            req.user = user;
            next();
        });
    }

    [Forbidden](res) {
        return res.status(403).json({
            forbidden: true,
            error: 'Forbidden!'
        });
    }
}

module.exports = new AuthMiddleware();