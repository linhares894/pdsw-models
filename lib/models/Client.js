const { Model, DataTypes } = require('sequelize')

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
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'client_id', as: 'addresses' })
  }
}

module.exports = Client










// module.exports = (sequelize, DataTypes) => {
//   const Client = sequelize.define("Client", {
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     name: DataTypes.INTEGER,
//     gender: DataTypes.STRING,
//     cpf: DataTypes.STRING,
//     rg: DataTypes.STRING,
//     dob: DataTypes.STRING,
//     currentAddress: DataTypes.INTEGER
//   });
//   Client.associate = (models) => {
//     Client.hasMany(models.Address)
//   }
//   Client.beforeCreate((Client, options) => {
//     return hashPassword(Client.password).then(hashedPw => {
//       Client.password = hashedPw;
//     });
//   });
  
//   return Client;
// }
