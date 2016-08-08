var monk = require('monk');

var db = monk('localhost:27017/starwars');
var swChars = db.get('character');

var express = require('express'),
  app = express();

app.get('/character', function(req, res) {
  swChars.find({}, function(err, docs) {
    if (err == null) {
      res.json(docs);
    } else {
      console.log(err);
    }
  });
});
