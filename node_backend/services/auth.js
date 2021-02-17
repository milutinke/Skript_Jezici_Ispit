const { sequelize, ValidationError } = require('../models');
const Configs = require('../config');
const JWT = require('jsonwebtoken');

class AuthService {
    async register(firstName, lastName, email, password) {
        let user;

        try {
            let foundUser = await this.findUserByEmail(email);

            if (foundUser)
                throw new Error("Email is already in use with another user!");

            user = await sequelize.models.User.create({
                firstName,
                lastName,
                email,
                password
            });
        } catch (error) {
            if (error instanceof ValidationError) {
                var i;
                for (i = 0; i < error.errors.length; i++) {
                    if (error.errors[i].type === 'notNull Violation') {
                        let fieldName = error.errors[i].message.split('.')[1].split(' ')[0].trim();
                        fieldName = fieldName[0].toUpperCase() + fieldName.substr(1);
                        error.errors[i].message = fieldName + ' can not be empty!';
                    }
                }

                throw new Error(error.errors[0].message);
            }
            else throw new Error(error);
        }

        return {
            user: user,
            token: JWT.sign(user.toJSON(), Configs.JWT.secret)
        };
    }

    async login(email, password) {
        let user = await this.findUserByEmail(email);

        if (!user)
            throw new Error("User with the provided email does not exists!");

        if (!await user.validatePassword(password))
            throw new Error("Invalid password provided!");

        return {
            user,
            token: JWT.sign(user.toJSON(), Configs.JWT.secret)
        };
    }

    async findUserByEmail(email) {
        return await sequelize.models.User.findOne({ where: { email } });
    }
}

module.exports = new AuthService();