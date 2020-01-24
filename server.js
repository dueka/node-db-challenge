const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(express.json());
// server.use("/api/projects", projectRouter);

server.use(helmet());

server.get("/", (req, res) => {
  res.send("<h3>Alive</h3>");
});

module.exports = server;
