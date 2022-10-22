const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

const hotels = require('./data/hotels.json');

app.get('/', (req, res) => {
  res.send('Travel Guru Server is running');
});

app.get('/hotels', (req, res) => {
  res.send(hotels);
});

app.get('/hotels/:id', (req, res) => {
  const id = req.params.id;
  const hotel = hotels.find(ht => ht.id === parseInt(id));
  res.send(hotel);
});

app.listen(port, () => {
  console.log(`Listing to the PORT ${port}`);
});
