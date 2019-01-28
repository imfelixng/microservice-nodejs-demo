const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send("This is book service main endpoint.");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Book service is running at port " + port);
});