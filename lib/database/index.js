const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Client = require('../models/Client')
const Address = require('../models/Address')
const Product = require('../models/Product')

const connection = new Sequelize(dbConfig)

Client.init(connection)
Address.init(connection)
Product.init(connection)

Address.associate(connection.models)
Client.associate(connection.models)

module.exports = connection









// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const config = require('../config/database');
// const db = {};

// const sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   config
//   );

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
