const express = require('express');
const app = express();
// database connection
const mongoose = require("mongoose");
//const db = mongoose.connect("mongodb://127.0.0.1:27017/todo-api");
let options = {useNewUrlParser: true,useUnifiedTopology: true};
let uri = 'mongodb://127.0.0.1:27017/todo-api';

mongoose.connect(uri, options).then(
() => {
    console.log('Connected to the database!')
},
    err => { console.log('Error! Could not connect') }
);


const {
  taskPatch,
  taskPost,
  taskGet,
  taskDelete,
} = require("./controllers/taskController.js");

// parser for the request body (required for the POST and PUT methods)
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// check for cors
const cors = require("cors");
app.use(cors({
  domains: '*',
  methods: "*"
}));


// listen to the task request
app.get("/api/tasks", taskGet);
app.post("/api/tasks", taskPost);
app.patch("/api/tasks", taskPatch);
app.put("/api/tasks", taskPatch);
app.delete("/api/tasks", taskDelete);


app.listen(3000, () => console.log(`Example app listening on port 3000!`))
