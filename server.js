const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3005;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);



  //listening on
app.listen(PORT, () =>
  console.log(`listening at http://localhost:${PORT}`)
);
  
  