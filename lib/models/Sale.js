const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const { Model, DataTypes } = require('sequelize')
const SaleItem = require('./SaleItem')

class Sale extends Model {
  static init(sequelize) {
    super.init({
      clientId: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER
    }, 
    {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.SaleItem, { foreignKey: 'sale_id', as: 'saleItems' })
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' })
  }

  static async save(sale) {
    const { clientId, saleItems } = sale
    delete sale.saleItems

    if (clientId == null || saleItems == null) {
      throw {
        message: 'Required fields are null'
      }
    }

    const db = new Sequelize(dbConfig)

    const newSaleItems = await db.transaction(t => {
      return this.create(sale, {transaction: t})
        .then(newSale => {
          sale = newSale
          return Promise.all(saleItems.map(saleItem => {
            saleItem.saleId = newSale.id
            return SaleItem.create(saleItem, {transaction: t})
          }))
        })
    })
    sale.saleItems = newSaleItems
    return sale
  }
}

module.exports = Sale
