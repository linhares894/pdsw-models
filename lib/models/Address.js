
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
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
  })
  Address.associate = (models) => {
    Address.belongsTo(models.Client)
  }
  return Address
}
