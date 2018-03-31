const express = require("express");
const app = express();

// Define router
const index = require("./routes/index");
const all = require("./routes/all");
const completed = require("./routes/completed");
const todos = require("./routes/todos");
const add = require("./routes/add");

// Handle json data
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/all", all);
app.use("/completed", completed);
app.use("/todos", todos);
app.use("/add", add);
app.use("/", index);

// Listen to port
const port = 4000;
app.listen(port, () => console.log(`Server listening to ${port}`));
