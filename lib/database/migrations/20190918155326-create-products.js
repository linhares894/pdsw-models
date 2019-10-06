'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cod: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      publisher: {
        type: Sequelize.STRING,
        allowNull: false
      },
      edition: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isbn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pages: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      img_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      available_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  }
};
