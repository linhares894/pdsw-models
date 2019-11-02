const { Model, DataTypes } = require('sequelize')

class PaymentMethod extends Model {
  static init(sequelize) {
    super.init({
      clientId: DataTypes.INTEGER,
      cardNumber: DataTypes.STRING,
      expiresAt: DataTypes.STRING,
      owner: DataTypes.STRING,
      cvc: DataTypes.INTEGER,
      stripe: DataTypes.STRING
    }, 
    {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' })
  }

}

module.exports = PaymentMethod
