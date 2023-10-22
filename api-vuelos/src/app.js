const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const loadTestData = require('./data/loadTestData');
const flightsRouter = require('./routes/flights');
require('dotenv').config()
// const reservationsRouter = require('./routes/reservations');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({ origin: process.env.URL_ORIGIN }));
app.use('/api', flightsRouter);
// app.use('/reservations', reservationsRouter);

sequelize.query('SELECT COUNT(*) AS count FROM public."Flights"').then(([results, metadata]) => {
  const rowCount = results[0].count;
  // console.log(rowCount);
  if (parseInt(rowCount) === 0) {
    sequelize.sync().then(async () => {
      console.log('syncronizes tables success.');
      await loadTestData();
      startServer();
    });
  } else {
    startServer();
  }
}).catch((err) => {
  sequelize.sync().then(async () => {
    console.log('syncronizes tables success.');
    await loadTestData();
    startServer();
  });
});

function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}