const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken')

class Client extends Model {
  static init(sequelize) {
    super.init({
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      cpf: DataTypes.STRING,
      rg: DataTypes.STRING,
      accessToken: DataTypes.STRING,
      currentAddress: DataTypes.INTEGER
    }, 
    {
      hooks: {
        beforeCreate: async (client) => {
          client.password = await bcrypt.hash(client.password, saltRounds)
          client.accessToken = jwt.sign({
            id: client.email,
            exp: Math.floor(Date.now() / 1000) + (360 * 60),
          }, "secret");
        }
      },
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'client_id', as: 'addresses' })
    this.hasMany(models.Sale, { foreignKey: 'client_id', as: 'sales' })
    this.hasOne(models.PaymentMethod, { foreignKey: 'client_id', as: 'paymentMethod' })
  }
}

module.exports = Client
