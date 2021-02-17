'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TicketAnswer extends Model {
    static associate(models) {
      this.belongsTo(models.Ticket);
      this.belongsTo(models.User);
    }
  };

  TicketAnswer.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        customValidator(value) {
          if (!value || (value && value.trim().length === 0))
            throw new Error('You must provide a valid content of the ticket answer!');

          if (value.trim().length > 1024)
            throw new Error('Ticket answer must not contain more then 1024 characters');
        }
      }
    }
  }, {
    sequelize,
    tableName: 'ticket_answer',
    modelName: 'TicketAnswer',
  });

  return TicketAnswer;
};