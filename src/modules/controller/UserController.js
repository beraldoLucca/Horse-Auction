// import UserService from "../service/UserService";
const UserModel = require("../model/User");

class UserController {
  async createUser(req, res) {
    try {
      const user = await UserModel.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }

  async findById(req, res) {
    try {
      const id = req.params.id;

      const user = await UserModel.findById(id);
      res.status(200).json(user);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }

  async updateUser(req, res) {
    try {
      const id = req.params.id;

      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }

  async deleteUser(req, res) {
    try {
      const id = req.params.id;

      const user = await UserModel.findByIdAndRemove(id);
      res.status(200).json(user);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }

  async findAll(req, res) {
    try {
      const users = await UserModel.find({});

      res.status(200).json(users);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}

module.exports = new UserController();
