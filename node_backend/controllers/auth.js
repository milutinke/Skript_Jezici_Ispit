const AuthService = require('../services/auth');

class AuthController {
    async register(req, res) {
        try {
            const { firstName, lastName, email, password } = req.body;
            const { user, token } = await AuthService.register(firstName, lastName, email, password);
            res.status(201).json({ user, token });
        } catch (error) {
            res.status(501).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const { user, token } = await AuthService.login(email, password);
            res.status(200).json({ user, token });
        } catch (error) {
            res.status(501).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();