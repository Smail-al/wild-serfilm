const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/programActions");

router.get("/programs", browse);

/* ************************************************************************* */

module.exports = router;
