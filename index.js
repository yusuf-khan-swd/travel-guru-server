const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const places = require('./data/places.json');

app.get('/', (req, res) => {
  res.send('Travel Guru Server is running');
});

app.get('/places', (req, res) => {
  res.send(places);
});

app.get('/places/:id', (req, res) => {
  const id = req.params.id;
  const hotel = places.find(ht => ht.id === parseInt(id));
  res.send(hotel);
});

app.listen(port, () => {
  console.log(`Listing to the PORT ${port}`);
});
