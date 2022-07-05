const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema(
  {
    registrationNumber: {
      type: String,
      required: [true, "A vehicle must have a registration number!"],
      maxLength: 15,
      minlength: 10,
    },
  },
  {
    name: {
      type: String,
      required: [true, "A vehicle must have a name!"],
      trim: true,
      maxLength: [40, "A vehicle must have less or equal than 40 characters!"],
      minlength: [
        5,
        "A vehicle name must have more or equal than 5 characters!",
      ],
    },
  },
  {
    color: {
      type: String,
    },
  }
);

export const Vehicle = mongoose.model("vehicle", vehicleSchema);
