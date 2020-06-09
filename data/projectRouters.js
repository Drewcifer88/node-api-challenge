const express = require("express");

const router = express.Router();

const Projects = require("./helpers/projectModel");
const Actions = require("./helpers/actionModel");

router.post("/:id/posts", (req, res) => {});

router.get("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
