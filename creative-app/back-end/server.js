const express = require('express');
const bodyParser = require("body-parser");
const songData = require('./songs.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/songs', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const songSchema = new mongoose.Schema({
  artist: String,
  title: String
});

songSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
  
songSchema.set('toJSON', {
  virtuals: true
});

const Song = mongoose.model('Song', songSchema);

/* SONGS */

//Populate the database with songs
songData.forEach(async (song) => {
  const newSong = new Song({
    artist: song.artist,
    title: song.title
  });
  try {
    await newSong.save();
  } catch (error) {
    console.log(error);
  }
  console.log("populated database with " + newSong.id + " " + newSong.title);
});

//get all of the songs
app.get('/api/songs/', async (req, res) => {
  try {
    let songs = await Song.find();
    res.send({songs: songs});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//create a new song
app.post('/api/songs/', async (req, res) => {
    const song = new Song({
    artist: req.body.artist,
    title: req.body.title
  });
  try {
    await song.save();
    res.send({song:song});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//delete a song
app.delete('/api/songs/:id', async (req, res) => {
  try {
    await Song.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));
