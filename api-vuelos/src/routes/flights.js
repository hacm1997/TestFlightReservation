const express = require('express');
const router = express.Router();
const Flight = require('../models/flight.model');
const Reservation = require('../models/reservation.model');

// Endpoint to find avaulable flights
router.get('/flights', async (req, res) => {
  try {
    const flights = await Flight.findAll();
    console.log(flights);
    res.json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error to find flights' });
  }
});

router.get('/flights/search', async (req, res) => {
  const { departure, destination } = req.query;

  try {
    // Realiza una consulta a la base de datos para buscar vuelos que coincidan con departure y destination
    const flights = await Flight.findAll({
      where: {
        departure: departure,
        destination: destination,
      },
    });

    res.json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar vuelos' });
  }
});

// Endpoint to create reservation of flight
router.post('/reservation', async (req, res) => {
  const { flightId, passengerName, passengerDni, seatNumber } = req.body;
  console.log(req.body)
  try {
    const reservation = await Reservation.create({ flightId, passengerName, passengerDni, seatNumber });
    res.json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error to realized reservation' });
  }
});

// Endpoint to find reservations details
router.get('/reservation/:passengerDni', async (req, res) => {
  const { passengerDni } = req.params;
  console.log(passengerDni);

  try {
    const reservation = await Reservation.findAll({
      where: {
        passengerDni: passengerDni,
      }
    });
    // const reservation = await Reservation.findByPk(passengerDni);
    if (reservation.length > 0) {
      res.json(reservation);
    } else {
      res.status(404).json({ error: 'Reservation not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error to get reservation detail' });
  }
});

router.put('/update-flight/:reservationId', async (req, res) => {
  const { reservationId } = req.params;

  try {
    // Get reservation by ID
    const reservation = await Reservation.findByPk(reservationId);

    if (!reservation) {
      res.status(404).json({ error: 'Reservation not found' });
      return;
    }

    // caululate seats number
    const seatsToDeduct = reservation.seatNumber;

    // update seats in flights
    const flight = await Flight.findByPk(reservation.flightId);
    flight.availableSeats -= seatsToDeduct;
    await flight.save();

    res.json({ message: 'update seats success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error to update seats' });
  }
});


module.exports = router;