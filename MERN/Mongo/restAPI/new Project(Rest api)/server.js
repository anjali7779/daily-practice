const express = require("express");
const Cart = require("./model/Ecom");
require("./database/connection");
const app = express();
const port = process.env.PORT || 10;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from expess server");
});

// app.post("/ecom", (req, res) => {
//   console.log(req.body);
//   const product = new Cart(req.body);

//   product
//     .save()
//     .then(() => {
//       res.status(200).json({
//         msg: product,
//       });
//     })
//     .catch((err) => {
//       res.status(422).json({
//         err: err,
//       });
//     });
// });

app.post("/ecom", async (req, res) => {
  try {
    const product = new Cart(req.body);
    const response = await product.save();
    if (response) {
      res.status(200).json({
        msg: product,
      });
    } else {
      res.status(422).json({
        err: err,
      });
    }
  } catch (err) {
    res.status(500).json({
      err: err,
    });
  }
});

app.get("/ecom", async (req, res) => {
  try {
    const product = await Cart.find();
    res.status(200).json({
      msg: product,
    });
  } catch (err) {
    res.status(422).json({
      err,
    });
  }
});

app.get("/ecom/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Cart.findById({
      _id,
    });
    res.status(200).json({
      msg: product,
    });
  } catch (err) {
    res.status(422).json({
      err,
    });
  }
});

app.get("/ecoms/:brand", async (req, res) => {
  try {
    const brand = req.params.brand;
    const product = await Cart.find({
      brand,
    });
    res.status(200).json({
      msg: product,
    });
  } catch (err) {
    res.status(422).json({
      err,
    });
  }
});

app.delete("/ecom/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Cart.findByIdAndDelete({
      _id,
    });
    res.status(200).json({
      msg: product,
    });
  } catch (err) {
    res.status(422).json({
      err,
    });
  }
});

app.patch("/ecom/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Cart.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).json({
      msg: product,
    });
  } catch (err) {
    res.status(422).json({
      err,
    });
  }
});

app.listen(port, () => {
  console.log(`connection is set at http://localhost:${port}`);
});
