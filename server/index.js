const express = require('express');
const app = express();
const port = 5150;
const path = require('path');
const db = require('../database/config.js')
const parser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
const api = require('./api.js')

app.use('/', express.static(path.join(`${__dirname}/../client/public`)))
  .use(parser.json())
  .use(cors());

app.get('/shows', (req, res) => {
  let userId = 1
  db.getShows(userId, res);
});

app.get('/search', (req, res) => {
  axios.get('https://api.setlist.fm/rest/1.0/search/setlists?p=1', {
    headers: {'x-api-key': 'oXjdZuH5AF7H9kk1-ZUzpopfJRMEyjx9ezVB'},
    params: {
      artistName: req.query.artistName,
      venueName: req.query.venueName,
      cityName: req.query.cityName,
      state: req.query.state,
      year: req.query.year,
      }
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
        console.log('error', error);
  })
})

app.post('/saveShow', (req, res) => {
  // console.log(req.body.sets.set)
  let show = {};
  show.showid = req.body.id;
  show.artist = req.body.artist.name;
  show.eventdate = req.body.eventDate;
  show.city = req.body.venue.city.name;
  show.state = req.body.venue.city.stateCode;
  show.venue = req.body.venue.name;
  show.sets = req.body.sets.set;
  show.userid = 1;
  db.addShow(show, res)
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))