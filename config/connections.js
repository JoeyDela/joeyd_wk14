const Sequeliez = require("sequelize");
require("dotenv").config();

let sequeliez;

if (process.env.JAWSDB_URL) {
  sequeliez = new Sequeliez(process.env.JAWSDB_URL);
} else {
  sequeliez = new Sequeliez(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3001,
    }
  );
}

module.exports = sequeliez;
