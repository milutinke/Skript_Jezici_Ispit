'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        isAlphanumeric: true
      },

      lastName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        isAlphanumeric: true
      },

      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        isEmail: true
      },

      password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },

      isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};