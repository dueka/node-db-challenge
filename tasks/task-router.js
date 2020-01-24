const express = require("express");

const Tasks = require("./tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve the tasks" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Tasks.getTasksById(id)
    .then(tasks => {
      if (tasks) {
        res.json(tasks);
      } else {
        res.status(404).json({ message: "Could not find the tasks" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.post("/", (req, res) => {
  const tasksData = req.body;

  Tasks.addTasks(tasksData)
    .then(tasks => {
      res.status(201).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create a a new tasks" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Tasks.getTasksById(id)
    .then(tasks => {
      if (tasks) {
        tasks.updateTasks(changes, id).then(updatedtasks => {
          res.json(updatedtasks);
        });
      } else {
        res.status(404).json({ message: "Could not find tasks with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to update tasks"
      });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Tasks.removeTasks(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete task " });
    });
});

module.exports = router;
