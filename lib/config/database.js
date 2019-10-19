require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = {
  host: 'localhost' || 'dsw-models.c37nszbvuhf1.us-east-1.rds.amazonaws.com',
  username: 'local_admin',
  password: 'adminadmin',
  database: 'local_db',
  dialect: "postgres",
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
