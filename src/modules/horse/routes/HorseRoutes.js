const router = require("express").Router();

import HorseController from "../controller/HorseController.js"

router.get('/horse/:id', HorseController.findById);
router.post('/horse/create', HorseController.createHorse);
router.delete('/horse/:id', HorseController.deleteHorse);
router.get('/horse/horses', HorseController.findAll);

module.exports = router;