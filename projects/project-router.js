const express = require("express");

const Projects = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve the projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.getProjectsById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: "Could not find the project" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Project" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  Projects.addProjects(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create a a new project" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.getProjectsById(id)
    .then(project => {
      if (project) {
        Projects.updateProjects(changes, id).then(updatedProject => {
          res.json(updatedProject);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to update project"
      });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Projects.removeProjects(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete project" });
    });
});

module.exports = router;
