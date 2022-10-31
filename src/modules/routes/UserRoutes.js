const router = require("express").Router();

const UserController = require("../controller/UserController.js");

router.get("/user/:id", UserController.findById);
router.post("/user/create", UserController.createUser);
router.delete("/user/delete/:id", UserController.deleteUser);
router.post("/user/update/:id", UserController.updateUser);
router.get("/user", UserController.findAll);

module.exports = router;
