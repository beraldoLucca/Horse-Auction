let express = require("express");
let router = express.Router();

import UserController from "../controller/UserController.js";

router.get("/user/:id", UserController.findById);
router.post("/user/create", UserController.createUser);
router.delete("/user/delete/:id", UserController.deleteUser);
router.post("/user/update/:id", UserController.updateUser);
router.get("/users", UserController.findAll);
