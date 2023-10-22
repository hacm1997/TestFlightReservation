const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgresql',
  port: 5432,
});

module.exports = sequelize;