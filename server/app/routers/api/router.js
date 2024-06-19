const express = require("express");

const router = express.Router();

const { sayHello } = require("../../controllers/sayActions");

router.get("/", sayHello);

const { browse } = require("../../controllers/programActions");

router.get("/programs", browse);

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
