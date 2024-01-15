const express = require("express");
const router = express.Router();
const {PulseProdController} = require("../controllers/PulseProd.controller")

router.get("/", PulseProdController.getAll)
router.get("/:id", PulseProdController.getById)
router.post("/", PulseProdController.add)
router.delete("/:id", PulseProdController.delete)

module.exports = router