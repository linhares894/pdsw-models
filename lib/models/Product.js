module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        cod: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        author: DataTypes.STRING,
        publisher: DataTypes.STRING,
        edition: DataTypes.STRING,
        isbn: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        pages: DataTypes.INTEGER
    });

    return Product;
}