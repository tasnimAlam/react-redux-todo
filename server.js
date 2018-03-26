const express = require("express");
const app = express();

// Define router
const index = require("./routes/index");
const all = require("./routes/all");
const completed = require("./routes/completed");
const todos = require("./routes/todos");

app.use("/all", all);
app.use("/completed", completed);
app.use("/todos", todos);
app.use("/", index);

// Handle json data
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Listen to port
const port = 4000;
app.listen(port, () => console.log(`Server listening to ${port}`));
