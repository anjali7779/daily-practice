const mongoose = require("mongoose");
const EcomSchema = new mongoose.Schema({
  modelName: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  brand: {
    type: String,
    required: true,
    enum: ["samsung", "realme", "apple"],
  },
  price: {
    type: Number,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
  },
  camera: {
    type: String,
    required: true,
  },
  battery: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const mobModel = new mongoose.model("products", EcomSchema);
module.exports = mobModel;
