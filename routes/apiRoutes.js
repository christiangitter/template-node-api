const express = require("express");
const router = express.Router();
const functions = require("../services/apiFunctions");

/* GET all the Data */
router.get("/", async function (req, res, next) {
  try {
    res.json(await functions.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting functions `, err.message);
    next(err);
  }
});

/* POST Data */
router.post("/", async function (req, res, next) {
  try {
    res.json(await functions.create(req.body));
  } catch (err) {
    console.error(`Error while creating data`, err.message);
    next(err);
  }
});

/* DELETE Data */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await functions.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting data`, err.message);
    next(err);
  }
});

module.exports = router;
