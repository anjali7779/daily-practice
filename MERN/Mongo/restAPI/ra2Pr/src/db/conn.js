const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://anjali7779:anjali1505@studentcluster.7fnd7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connection is established");
  })
  .catch((e) => {
    console.log("No connection");
  });
