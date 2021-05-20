const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 10;

// app.get("/", (req, res) => {
//   res.send("Hello..from anjali!!");
// });

app.use(express.json());

// Create a new students
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);

//   //Post data Using promise
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });

//   //   res.send("Hello..Students!!");
// });

// Using Async-Await
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
