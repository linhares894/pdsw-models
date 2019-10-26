const { Model, DataTypes } = require('sequelize')

class SaleItem extends Model {
  static init(sequelize) {
    super.init({
      productId: DataTypes.INTEGER,
      saleId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
    }, 
    {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Sale, { foreignKey: 'sale_id', as: 'sale' })
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' })
  }

}

module.exports = SaleItem
