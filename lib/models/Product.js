const { Model, DataTypes } = require('sequelize')

class Product extends Model {
  static init(sequelize) {
    super.init({
      cod: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      author: DataTypes.STRING,
      publisher: DataTypes.STRING,
      edition: DataTypes.STRING,
      isbn: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      genre: DataTypes.STRING,
      pages: DataTypes.INTEGER,
      language: DataTypes.STRING,
      price: DataTypes.INTEGER,
      imgUrl: DataTypes.STRING,
      availableQuantity: DataTypes.INTEGER
    }, {
      sequelize
    })
  }
}

module.exports = Product
