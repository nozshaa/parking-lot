const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: [true, "A vehicle must have a registration number!"],
  },
  name: String,
  color: String,
});

// {
//   registrationNumber: {
//     type: String,
//     required: [true, "A vehicle must have a registration number!"],
//     // maxLength: 15,
//     // minlength: 4,
//   },
// },
// {
//   name: {
//     type: String,
//     required: [true, "A vehicle must have a name!"],
//     // trim: true,
//     // maxLength: [40, "A vehicle must have less or equal than 40 characters!"],
//     // minlength: [
//     //   5,
//     //   "A vehicle name must have more or equal than 5 characters!",
//     // ],
//   },
// },
// {
//   color: {
//     type: String,
//   },
// }

// const vehicleSchema = new mongoose.Schema({
//   registrationNumber: String,
// });

const Vehicle = mongoose.model("vehicle", vehicleSchema);
module.exports = Vehicle;
