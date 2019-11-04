const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const hash = require('object-hash');
const { Model, DataTypes } = require('sequelize')
const SaleItem = require('./SaleItem')

class Sale extends Model {
  static init(sequelize) {
    super.init({
      clientId: DataTypes.INTEGER,
      addressId: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      cod: DataTypes.STRING,
      billetCode: DataTypes.STRING
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
    const { clientId, saleItems, payment } = sale
    delete sale.saleItems

    if (clientId == null || saleItems == null) {
      throw {
        message: 'Required fields are null'
      }
    }

    const db = new Sequelize(dbConfig)

    const newSaleItems = await db.transaction(t => {
      sale.cod = hash({
        id: clientId,
        date: new Date() / 1000
      })
      sale.billetCode = hash({
        id: clientId,
        totalPrice: sale.totalPrice || 0
      })
      return this.create(sale, {transaction: t})
        .then(newSale => {
          sale = newSale
          return Promise.all(
              saleItems.map(saleItem => {
                saleItem.saleId = newSale.id
                return SaleItem.create(saleItem, {transaction: t})
              }),
            )
        })
    })
    sale.saleItems = newSaleItems
    return sale
  }
}

module.exports = Sale
