const sequelize = require('../config/database');
const Flight = require('../models/flight.model');
const Reservation = require('../models/reservation.model');

// Cargar datos de prueba de vuelos
async function loadFlights() {
  try {
    await Flight.bulkCreate([
      {
        name: 'Vuelo 1',
        departure: 'Cartagena',
        destination: 'Barranquilla',
        date: new Date(),
        availableSeats: 100,
      },
      {
        name: 'Vuelo 2',
        departure: 'Barranquilla',
        destination: 'Cartagena',
        date: new Date(),
        availableSeats: 100,
      },
      {
        name: 'Vuelo 3',
        departure: 'Cartagena',
        destination: 'Medellín',
        date: new Date(),
        availableSeats: 150,
      },
      {
        name: 'Vuelo 4',
        departure: 'Medellín',
        destination: 'Cartagena',
        date: new Date(),
        availableSeats: 150,
      },
      {
        name: 'Vuelo 5',
        departure: 'Bogotá',
        destination: 'Cartagena',
        date: new Date(),
        availableSeats: 150,
      },
      {
        name: 'Vuelo 6',
        departure: 'Cartagena',
        destination: 'Bogotá',
        date: new Date(),
        availableSeats: 150,
      },
      {
        name: 'Vuelo 7',
        departure: 'Medellín',
        destination: 'Barranquilla',
        date: new Date(),
        availableSeats: 150,
      },
      {
        name: 'Vuelo 8',
        departure: 'Barranquilla',
        destination: 'Medellín',
        date: new Date(),
        availableSeats: 150,
      },
      {
        name: 'Vuelo 9',
        departure: 'Bogotá',
        destination: 'Medellín',
        date: new Date(),
        availableSeats: 150,
      },
      {
        name: 'Vuelo 10',
        departure: 'Medellín',
        destination: 'Bogotá',
        date: new Date(),
        availableSeats: 150,
      },
      // Agrega más vuelos aquí
    ]);
  } catch (error) {
    console.error('Error al cargar datos de prueba de vuelos:', error);
  }
}

// Cargar datos de prueba de reservas
async function loadReservations() {
  try {
    await Reservation.bulkCreate([
      {
        flightId: 1,
        passengerName: 'Pedrito',
        passengerDni: 123456,
        seatNumber: 1,
      },
      {
        flightId: 2,
        passengerName: 'Juanito',
        passengerDni: 987654,
        seatNumber: 1,
      },
      // Agrega más reservas aquí
    ]);
  } catch (error) {
    console.error('Error al cargar datos de prueba de reservas:', error);
  }
}

// Cargar datos de prueba de vuelos y reservas
async function loadTestData() {
  try {
    await loadFlights();
    await loadReservations();
    console.log('Datos de prueba cargados exitosamente.');
  } catch (error) {
    console.error('Error al cargar datos de prueba:', error);
  }
}
module.exports = loadTestData;
