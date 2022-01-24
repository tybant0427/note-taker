const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
const PORT = 3005;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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