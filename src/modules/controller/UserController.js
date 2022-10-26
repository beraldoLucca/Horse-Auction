import UserService from "../service/UserService";
const UserModel = require("../model/User");

class UserController {
  async createUser(req, res) {
    return await UserService.createUser(req, res);
  }

  async findById(req, res) {
    return await UserService.findById(req, res);
  }
  async findAll(req, res) {
    return await UserService.findAll(req, res);
  }

  async deleteUser(req, res) {
    return await UserService.deleteUser(req, res);
  }

  async findAll(req, res) {
    try {
      const users = await UserModel.find({});

      res.status(200).json(users);
    } catch (error) {
      return res.status(500).send(errors.message);
    }
  }
}

export default UserController;
