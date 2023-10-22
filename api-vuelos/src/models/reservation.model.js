const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reservation = sequelize.define('Reservation', {
  flightId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  passengerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passengerDni: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Reservation;