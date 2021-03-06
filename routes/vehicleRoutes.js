const express = require("express");
const vehicleController = require("../controllers/vehicleController");

const router = express.Router();

router
  .route("/")
  .get(vehicleController.getAllVehicles)
  .post(vehicleController.createVehicle);

router
  .route("/:id")
  .get(vehicleController.getVehicle)
  .delete(vehicleController.deleteVehicle)
  .patch(vehicleController.updateVehicle);

module.exports = router;
