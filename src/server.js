const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://deploy:deploy@rocketbox-4vhin.mongodb.net/rocketbox?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(3000);