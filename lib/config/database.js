require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = {
  host: 'dsw-models.c37nszbvuhf1.us-east-1.rds.amazonaws.com',
  username: 'root',
  password: 'adminadmin',
  database: 'dsw_models',
  dialect: process.env.DB_DIALECT || "postgres",
  storage: "./__tests__/database.sqlite",
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
