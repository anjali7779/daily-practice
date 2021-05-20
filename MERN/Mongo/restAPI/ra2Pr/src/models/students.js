const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  contactNo: {
    type: Number,
    min: 10,
    required: true,
  },
  city: {
    type: String,
  },
});

// We will create a new collection
const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;
