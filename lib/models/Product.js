module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
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
        imgUrl: DataTypes.STRING
    });

    return Product;
}
