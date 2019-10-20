const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt');
const saltRounds = 10;

class Client extends Model {
  static init(sequelize) {
    super.init({
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      cpf: DataTypes.STRING,
      rg: DataTypes.STRING,
      dob: DataTypes.STRING,
      currentAddress: DataTypes.INTEGER
    }, 
    {
      hooks: {
        beforeCreate: async (client) => {
          client.password = await bcrypt.hash(client.password, saltRounds)
        }
      },
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'client_id', as: 'addresses' })
  }
}

module.exports = Client
