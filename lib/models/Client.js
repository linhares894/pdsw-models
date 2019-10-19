
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    dob: DataTypes.STRING,
    current_address: DataTypes.INTEGER
  });
  Client.associate = (models) => {
    Client.hasMany(models.Address)
  }
  return Client;
}
