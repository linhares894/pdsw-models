const { Model, DataTypes } = require('sequelize')

class Payment extends Model {
  static init(sequelize) {
    super.init({
      saleId: DataTypes.INTEGER,
      installments: DataTypes.INTEGER,
      paymentMethodId: DataTypes.INTEGER,
      interest_rate: DataTypes.INTEGER
    },
    {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.PaymentMethod, { foreignKey: 'payment_method_id', as: 'payment_method' })
    this.belongsTo(models.Sale, { foreignKey: 'sale_id', as: 'sale' })
  }

}

module.exports = Payment
