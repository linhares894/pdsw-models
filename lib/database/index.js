const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Client = require('../models/Client')
const Address = require('../models/Address')
const Product = require('../models/Product')
const Sale = require('../models/Sale')
const SaleItem = require('../models/SaleItem')
const PaymentMethod = require('../models/PaymentMethod')
const Payment = require('../models/Payment')

const connection = new Sequelize(dbConfig)

Client.init(connection)
Address.init(connection)
Product.init(connection)
Sale.init(connection)
SaleItem.init(connection)
PaymentMethod.init(connection)
Payment.init(connection)

Address.associate(connection.models)
Sale.associate(connection.models)
SaleItem.associate(connection.models)
Client.associate(connection.models)
PaymentMethod.associate(connection.models)
Payment.associate(connection.models)

module.exports = connection
