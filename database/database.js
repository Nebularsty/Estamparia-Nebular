const sequelize = require('sequelize');

const connection = new sequelize(
    'api_estamparia_bd',
    'root',
    '',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
);

module.exports = connection;