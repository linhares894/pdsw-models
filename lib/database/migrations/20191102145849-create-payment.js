module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      installments: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      payment_method_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'payment_methods',
          key: 'id'
        }
      },
      interest_rate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sales',
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
    return queryInterface.dropTable('payments')
  }
};
