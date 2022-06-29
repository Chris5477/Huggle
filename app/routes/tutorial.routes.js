const express = require("express");
const tutorials = require("../controllers/tutorial.controller");

const router = express.Router();

module.exports = (app) => {
	router.post("/", tutorials.create);
	router.get("/", tutorials.findAll);
	router.get("/:id", tutorials.findOne);
	router.delete("/:id", tutorials.delete);
	router.delete("/", tutorials.deleteAll);
	router.get("/published", tutorials.findAllPublished);
	router.put("/:id", tutorials.update);
	app.use("/api/tutorials", router);
};
