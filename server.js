const express = require("express");
var cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors());

module.exports = server;
