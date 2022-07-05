const PORT = 3000;
const mongoose = require("mongoose");
const express = require("express");
// const bodyParser = require("body-parser");

const vehicleRouter = require("./routes/vehicleRoutes");

const app = express();

const myLogg = (req, res, next) => {
  console.log("hello middleware!");
  next();
};

// app.use(bodyParser.json());
app.use(express.json());
app.use(myLogg);

app.use("/vehicles", vehicleRouter);

app.listen(PORT, () => {
  console.log(`I am listening on port: ${PORT}`);
});

mongoose
  .connect(
    "mongodb+srv://nastaran1366:american2@cluster0.dtjckyp.mongodb.net/test",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connection successful!"));
