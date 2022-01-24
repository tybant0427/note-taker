const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
const PORT = 3005;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());