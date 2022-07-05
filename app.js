const PORT = 3000;
const mongoose = require("mongoose");
const express = require("express");

const vehicleRouter = require("./routes/vehicleRoutes");

const app = express();

const myLogg = (req, res, next) => {
  // console.log("hello middleware!");
  next();
};

//Parsing requests
app.use(express.json());
app.use(myLogg);

app.use("/vehicles", vehicleRouter);

mongoose.connect(
  "mongodb+srv://nastaran1366:american2@cluster0.dtjckyp.mongodb.net/test",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(PORT, () => {
  console.log(`I am listening on port: ${PORT}`);
});
