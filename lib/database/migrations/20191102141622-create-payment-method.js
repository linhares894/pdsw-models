module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payment_methods', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      card_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expires_at: {
        type: Sequelize.STRING,
        allowNull: false
      },
      owner: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stripe: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cvc: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clients',
          key: 'id'
        }
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
    return queryInterface.dropTable('payment_methods')
  }
};
