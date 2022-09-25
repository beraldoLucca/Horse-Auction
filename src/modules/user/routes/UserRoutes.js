const router = require("express").Router();

import UserController from "../controller/UserController.js"

router.get('/user/:id', UserController.findById);
router.post('/user/create', UserController.createHorse);
router.delete('/user/:id', UserController.deleteHorse);
router.get('/user/users', UserController.findAll);

module.exports = router;