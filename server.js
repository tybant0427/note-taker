const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const notes = require('./db/db.json');
const res = require('express/lib/response');


const app = express();
const PORT = 3005;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get api from db.json
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'))
});

//POST to add new notes
app.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNote = req.body;
    newNote.id = uuid.v4();
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
});

//delete notes 
app.delete('/api/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const delNote = notes.filter((remNote) => remNote.id !== req.params.id)
    fs.writeFileSync('./db/db.json', JSON.stringify(delNote));
    res.json(delNote);
})


//HTML calls
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  //listening on
  app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
  });