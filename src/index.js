// Start hosting:------>>>>>>>> npm run dev
const express = require("express"); //using express app
const morgan = require("morgan"); //mogan is used to tracking every get and post request and also understanding the hitting of sever on calling
const helmet = require("helmet"); //helmet is used to secure your web app it is basically used in hidding major network data
const cors = require("cors"); //cross origin resouse sharing
const mongoose = require("mongoose");
require("dotenv").config();

const middleware = require("./middleware");
const logs = require("./api/logs");
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection sucessful`);
  })
  .catch((err) => {
    console.log(`no connection`);
  });
const app = express();

app.use(morgan("common"));
app.use(helmet());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json()); //bodyparseing middleware

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.use("/api/logs", logs);

app.use(middleware.notFound);

app.use(middleware.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`listinig at http://localhost ${port}`);
});
