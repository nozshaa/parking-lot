exports.getAllVehicles = (req, res) => {
  // console.log("Hello from get all vehicles!");
  res.send("Hello from get all vehicles!");
  // next();
};

//Test multiple handler functions
// exports.handlerFunction = (req, res) => {
//   res.send("Hello Handler function");
// };

exports.getVehicle = (req, res) => {
  res.send(`Hello from get a vehicle with id: ${req.params.id}`);
};

exports.createVehicle = (req, res) => {
  res.send(`Hello from create a vehicle!`);
};
