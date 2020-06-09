const express = require("express");
const router = express.Router();

const Projects = require("./helpers/projectModel");

const Actions = require("./helpers/actionModel");

router.get("/", (req, res) => {});

router.post("/:id/posts", (req, res) => {
  const id = req.params.id;
});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

module.exports = router;
