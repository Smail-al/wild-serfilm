const express = require("express");

const router = express.Router();

const { sayHello } = require("../../controllers/sayActions");

router.get("/", sayHello);

const { browse } = require("../../controllers/programActions");

router.get("/programs", browse);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

/* ************************************************************************* */

module.exports = router;
