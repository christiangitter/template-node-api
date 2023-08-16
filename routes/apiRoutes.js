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

module.exports = router;