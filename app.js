const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const vehicleRouter = require("./routes/vehicleRoutes");

const app = express();

// console.log(process.env.PORT);

//Parsing requests
app.use(express.json());

app.use("/vehicles", vehicleRouter);

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`I am listening on port: ${port}`);
});
