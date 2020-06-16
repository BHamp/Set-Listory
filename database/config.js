var bluebird = require('bluebird');

const options = {
    promiseLib: bluebird,
  };

var pgp = require('pg-promise')(options)

const connection = {
  host: 'localhost',
  user: 'bhamp',
  password: '',
  database: 'listory',
  port: 5432,
}

var db = pgp(connection)

module.exports = {
    getShows(req, res) {
        db.many(`SELECT * FROM shows WHERE userid=${req}`)
            .then((results) => {

              for(var i=0; i < results.length; i++){
                console.log(results[i].sets)
                results[i].sets = results[i].sets.replace(/#/g, "'")
                let parsed = JSON.parse(results[i].sets)
              results[i].sets = parsed;
              }
              res.status(200).json(results)})
            .catch((err) => {
              console.log(err);
              res.status(400).json(err)});
    },

    addShow(data, res) {
      let string = JSON.stringify(data.sets);
      data.sets = string;
      data.sets = data.sets.replace(/'/g, '#');

      const { showid, artist, eventdate, city, state, venue, sets, userid } = data

        var insertStatement = `INSERT INTO shows (showid, artist, eventdate, city, state, venue, sets, userid) VALUES ( '${showid}', '${artist}', '${eventdate}', '${city}', '${state}', '${venue}', '${sets}', '${userid}') ON CONFLICT (showid) DO NOTHING`;
        db.none(insertStatement)
            .then(() => {
                res.status(200).send('Data Stored');
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json(err)});
    }
}