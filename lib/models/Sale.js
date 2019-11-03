const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const hash = require('object-hash');
const { Model, DataTypes } = require('sequelize')
const SaleItem = require('./SaleItem')
const Payment = require('./Payment')

class Sale extends Model {
  static init(sequelize) {
    super.init({
      clientId: DataTypes.INTEGER,
      addressId: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      cod: DataTypes.STRING
    }, 
    {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.SaleItem, { foreignKey: 'sale_id', as: 'saleItems' })
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' })
    this.hasOne(models.Payment, { foreignKey: 'sale_id', as: 'payment' })
  }

  static async save(sale) {
    const { clientId, saleItems, payment } = sale
    delete sale.saleItems

    if (clientId == null || saleItems == null || payment == null) {
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
      return this.create(sale, {transaction: t})
        .then(newSale => {
          sale = newSale
          payment.saleId = newSale.id
          return Promise.all(
              saleItems.map(saleItem => {
                saleItem.saleId = newSale.id
                return SaleItem.create(saleItem, {transaction: t})
              }),
              Payment.create(payment, {transaction: t})
            )
        })
    })
    sale.saleItems = newSaleItems
    return sale
  }
}

module.exports = Sale
