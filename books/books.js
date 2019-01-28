const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path: '../.env'});
const bodyParser = require('body-parser');

const Book = require('./models/book');

const app = express();

app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send("This is book service main endpoint.");
});

app.post("/book", async (req, res, next) => {
  const {title, author, numberPages, publisher} = req.body;
  const book = new Book({
    title,
    author,
    numberPages,
    publisher
  });

  let bookCreated = null;
  try {
    bookCreated = await book.save();
  } catch (err) {
    throw err;
  }

  if(!bookCreated) {
    throw new Error("Don't can create new book");
  }

  

  res.send("Testing our creste new book endpoint!")
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