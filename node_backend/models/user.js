'use strict';
const { Model } = require('sequelize');
const BCrypt = require('bcrypt');
const Validator = require('validator');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Ticket);
      this.hasMany(models.TicketAnswer);
    }

    toJSON() {
      return { ...this.get(), password: undefined };
    }

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    async validatePassword(password) {
      return await BCrypt.compare(password, this.password);
    }
  };

  User.init({
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      isAlphanumeric: true,

      validate: {
        customValidator(value) {
          if (!value || value && value.trim().length === 0)
            throw new Error("You must provide a valid first name!");
        }
      }
    },

    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      isAlphanumeric: true,

      validate: {
        customValidator(value) {
          if (!value || value && value.trim().length === 0)
            throw new Error("You must provide a valid last name!");
        }
      }
    },

    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      isEmail: true,

      validate: {
        customValidator(value) {
          if (!value || value && value.trim().length === 0 || !Validator.isEmail(value.trim()))
            throw new Error("You must provide a valid email");
        }
      }
    },

    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isAValidPassword(value) {
          if (!value)
            throw new Error("You must provide a valid password!");

          if (value.length < 5)
            throw new Error("Password must contain at least 5 characters!");
        }
      }
    },

    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',

    hooks: {
      beforeCreate: async (user) => {
        const salt = await BCrypt.genSalt(10);
        user.password = await BCrypt.hash(user.password, salt);
      }
    }
  });

  return User;
};