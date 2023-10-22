const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Flight = sequelize.define('Flight', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departure: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Flight;