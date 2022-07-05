const Vehicle = require("../models/vehicleModel");
const vehicleModel = require("../models/vehicleModel");

exports.getAllVehicles = async (req, res) => {
  // console.log("Hello from get all vehicles!");
  const vehicles = await Vehicle.find();

  res.status(200).json({
    status: "success",
    results: vehicles.length,
    data: {
      vehicles,
    },
  });
  try {
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
  // next();
};

exports.getVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    // console.log("vehicle: ", vehicle);

    res.status(200).json({
      status: "success",
      data: {
        vehicle,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

exports.createVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    // console.log("vehicle: ", vehicle);
    await vehicle.save();

    res.status(201).json({
      status: "success",
      data: {
        vehicle,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail2",
      message: err,
    });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        vehicle,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
