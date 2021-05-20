const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://anjali7779:anjali1505@firstcluster.wvzv5.mongodb.net/mobileEcom?retryWrites=true&w=majority`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
