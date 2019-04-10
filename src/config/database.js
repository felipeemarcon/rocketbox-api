const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://deploy:deploy@rocketbox-4vhin.mongodb.net/rocketbox?retryWrites=true",
  {
    useNewUrlParser: true
  }
);
