const express = require("express");

const routes = express.Router();

const BoxController = require("./controllers/BoxController");

routes.post("/boxes", BoxController.store);

// routes.get("/", (req, res) => {
//   // Req require params, data infos. Res is the awnser to client.
//   return res.send("Hello world");
// });

module.exports = routes;
