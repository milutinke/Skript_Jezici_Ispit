'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.hasMany(models.TicketAnswer);
    }
  };

  Ticket.init({
    title: {
      type: DataTypes.STRING(64),
      allowNull: false,

      validate: {
        validateLength(value) {
          if (value.length > 64)
            throw new Error('The title can have maximu of 64 characters!');
          else if (value.length < 5)
            throw new Error('The title must have the length of at least 5 characters!');
          else if (value.length === 0)
            throw new Error('You must provide the title!');
        }
      }
    },

    body: {
      type: DataTypes.STRING(1024),
      allowNull: false,

      validate: {
        validateLength(value) {
          if (value.length > 1024)
            throw new Error('The body can have maximu of 1024 characters!');
          else if (value.length < 10)
            throw new Error('The body must have the length of at least 10 characters!');
          else if (value.length === 0)
            throw new Error('You must provide the body!');
        }
      }
    },

    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'ticket',
    modelName: 'Ticket',
  });

  return Ticket;
};