const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev")); //this is required for some reason??
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve static stuff
app.use(express.static("public"));
//compress for speed
//app.use(compression());

//connect to heroku or local
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = require("./models");

//routes  WORK ON THIS
//app.use(require('./routes/api-route.js'));
app.use(require('./routes/html-route.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
