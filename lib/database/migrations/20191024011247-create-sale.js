module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      address_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'addresses',
          key: 'id'
        }
      },
      cod: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      total_price: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      billet_cod: {
        type: Sequelize.STRING,
        allowNull: true
      },
      shipping: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      installments: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    return queryInterface.dropTable('sales')
  }
};
