const Task = require("../models/taskModel");

/**
 * Creates a task
 *
 * @param {*} req
 * @param {*} res
 */
const taskPost = (req, res) => {
  var task = new Task();

  task.firstname = req.body.firstname;
  task.lastname = req.body.lastname;
  task.email = req.body.email;
  task.address = req.body.address;

  if (task.title && task.detail) {
    task.save(function (err) {
      if (err) {
        res.status(422);
        console.log('error while saving the student', err)
        res.json({
          error: 'There was an error saving the student'
        });
      }
      res.status(201);//CREATED
      res.header({
        'location': `http://localhost:3000/api/tasks/?id=${task.id}`
      });
      res.json(task);
    });
  } else {
    res.status(422);
    console.log('error while saving the student')
    res.json({
      error: 'No valid data provided for student'
    });
  }
};

/**
 * Get all tasks
 *
 * @param {*} req
 * @param {*} res
 */
const taskGet = (req, res) => {
  // if an specific task is required
  if (req.query && req.query.id) {
    Task.findById(req.query.id, function (err, task) {
      if (err) {
        res.status(404);
        console.log('error while queryting the student', err)
        res.json({ error: "student doesnt exist" })
      }
      res.json(task);
    });
  } else {
    // get all tasks
    Task.find(function (err, tasks) {
      if (err) {
        res.status(422);
        res.json({ "error": err });
      }
      res.json(tasks);
    });

  }
};

/**
 * Updates a task
 *
 * @param {*} req
 * @param {*} res
 */
const taskPatch = (req, res) => {
  // get task by id
  if (req.query && req.query.id) {
    Task.findById(req.query.id, function (err, task) {
      if (err) {
        res.status(404);
        console.log('error while queryting the student', err)
        res.json({ error: "student doesnt exist" })
      }

      // update the task object (patch)
      task.firstname = req.body.firstname ? req.body.firstname : task.firstname;
      task.lastname = req.body.lastname ? req.body.lastname : task.lastname;
      task.email = req.body.email ? req.body.email : task.email;
      task.address = req.body.address ? req.body.address : task.address;
     
      task.delete(function (err) {
        if (err) {
          res.status(422);
          console.log('error while saving the student', err)
          res.json({
            error: 'There was an error saving the student'
          });
        }
        res.status(200); // OK
        res.json(task);
      });
    });
  } else {
    res.status(404);
    res.json({ error: "student doesnt exist" })
  }
};

const taskDelete = (req, res) => {
  // get task by id
  if (req.query && req.query.id) {
    Task.findById(req.query.id, function (err, task) {
      if (err) {
        res.status(404);
        console.log('error while queryting the student', err)
        res.json({ error: "student doesnt exist" })
      }

      task.remove(function (err) {
        if (err) {
          res.status(500);
          console.log('error while delete the student', err)
          res.json({
            error: 'There was an error delete the student'
          });
        }
        res.status(200); // OK
        res.json(task);
      });
    });
  } else {
    res.status(404);
    res.json({ error: "student doesnt exist" })
  }
};

module.exports = {
  taskGet,
  taskPost,
  taskPatch,
  taskDelete
}