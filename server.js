const express = require("express");
const app = express();
const cors = require("cors");

// Define router
const all = require("./routes/all");
const completed = require("./routes/completed");
const todos = require("./routes/todos");
const add = require("./routes/add");
const deleteTask = require("./routes/delete");
const update = require("./routes/update");

// Handle json data
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(cors());

app.use("/all", all);
app.use("/completed", completed);
app.use("/todos", todos);
app.use("/add", add);
app.use("/delete", deleteTask);
app.use("/update", update);

// Listen to port
const port = 4000;
app.listen(port, () => console.log(`Server listening to ${port}`));
