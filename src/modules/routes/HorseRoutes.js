const router = require("express").Router();

const HorseController = require("../controller/HorseController.js");

router.get("/horse/:id", HorseController.findById);
router.post("/horse/create", HorseController.createHorse);
router.delete("/horse/delete/:id", HorseController.deleteHorse);
router.post("/horse/update/:id", HorseController.updateHorse);
router.get("/horse", HorseController.findAll);

module.exports = router;
