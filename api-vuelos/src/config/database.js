const { Sequelize } = require('sequelize');
require('dotenv').config()

const name = process.env.NAME_DB;
const username = process.env.USERNAME_DB;
const password = process.env.PASSWORD_DB;

const sequelize = new Sequelize(name, username, password, {
  host: 'localhost',
  dialect: 'postgresql',
  port: 5432,
});

module.exports = sequelize;