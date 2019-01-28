const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path: '../.env'});

const app = express();

app.get('/', (req, res, next) => {
  res.send("This is book service main endpoint.");
});

app.post("/book", (req, res, next) => {

});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true
}, (err) => {
  if(err) console.log(err);
  console.log('Connected mongodb success');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Book service is running at port " + port);
});