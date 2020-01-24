const express = require("express");

const Resources = require("./resources-model");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve the resources" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Resources.getResourcesById(id)
    .then(resources => {
      if (resources) {
        res.json(resources);
      } else {
        res.status(404).json({ message: "Could not find the resources" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.post("/", (req, res) => {
  const resourceData = req.body;

  Resources.addResources(resourceData)
    .then(resources => {
      res.status(201).json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create a a new resources" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Resources.getResourcesById(id)
    .then(resources => {
      if (resources) {
        Resources.updateResources(changes, id).then(updateResources => {
          res.json(updateResources);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find resource with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to update resource"
      });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Resources.removeResources(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete resource" });
    });
});

module.exports = router;
