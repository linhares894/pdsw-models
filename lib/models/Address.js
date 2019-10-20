const { Model, DataTypes } = require('sequelize')

class Address extends Model {
  static init(sequelize) {
    super.init({
      clientId: DataTypes.INTEGER,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.STRING,
      lat: DataTypes.STRING,
      lng: DataTypes.STRING,
      zip_code: DataTypes.STRING,
      landmark: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' })
  }
}

module.exports = Address
