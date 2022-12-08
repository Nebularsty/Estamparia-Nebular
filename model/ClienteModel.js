const sequelize = require("sequelize");

const connection = require("../database/database.js");

const Cliente = connection.define("tbl_cliente", {
  nome_cliente: {
    type: sequelize.STRING(50),
    allowNull: false,
  },
  email_cliente: {
    type: sequelize.STRING(50),
  },
  telefone_cliente: {
    type: sequelize.STRING(30),
  },
});

module.exports = Cliente;
