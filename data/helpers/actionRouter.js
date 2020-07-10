const express = require("express");

const router = express.Router();

const Actions = require("./actionModel");

router.get("/", (req, res) => {
  Actions.get()
    .then((person) => {
      res.status(200).json(person);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Invalid post ID",
        error: error.message,
      });
    });
});

router.get("/:id", (req, res) => {
  res.status(200).json(req.user);
});

router.post("/:id/posts", (req, res) => {
  const { id } = req.params;

  req.body.project_id = id;
  console.log("body", req.body);
  Actions.insert(req.body)
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Actions.update(req.params.id, req.body)
    .then((updated) => {
      console.log("put:", updated);
      Actions.get(req.params.id)
        .then((person) => {
          res.status(200).json(person);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ Errormessage: "Error is occurred" });
        });
    })
    .catch((err) => {
      res.status(500).json({ Error: "updated error occured" });
    });
});

router.delete("/:id", (req, res) => {
  Actions.remove(req.user.id)
    .then((deleteThis) => {
      console.log(deleteThis);
      Actions.get().then((personInfo) => {
        console.log(`Delete Success`);
        res.status(200).json(personInfo);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("");
    })
    .then();
});

//custom middleware

function validateActionById(req, res, next) {
  Actions.get(req.params.id)
    .then((person) => {
      if (person === undefined) {
        res.status(400).json({ message: "invalid user id" });
      } else {
        req.user = person;

        next();
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "error occured" });
    });
}

// function validateUser(req, res, next) {}

// function validateActions(req, res, next) {}

module.exports = router;
