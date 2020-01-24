const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const projectRouter = require("./projects/project-router");
const taskRouter = require("./tasks/task-router");
const resourceRouter = require("./resources/resources-router");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/projects", projectRouter);
server.use("api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.get("/", (req, res) => {
  res.send("<h3>Alive</h3>");
});

module.exports = server;
