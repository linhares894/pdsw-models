const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Client = require('../models/Client')
const Address = require('../models/Address')
const Product = require('../models/Product')
const Sale = require('../models/Sale')
const SaleItem = require('../models/SaleItem')

const connection = new Sequelize(dbConfig)

Client.init(connection)
Address.init(connection)
Product.init(connection)
Sale.init(connection)
SaleItem.init(connection)

Address.associate(connection.models)
Sale.associate(connection.models)
SaleItem.associate(connection.models)
Client.associate(connection.models)

module.exports = connection
