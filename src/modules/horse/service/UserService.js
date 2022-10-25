const express = require("express");
const UserModel = require("../model/User");

class UserService {
  async createUser(req, res) {
    try {
      const id = req.params.id;

      const user = await UserModel.findById(id);
      res.status(200).json(user);
    } catch (error) {
      return res.status(500).send(errors.message);
    }
  }

  async findById(req, res) {
    try {
      const id = req.params.id;

      const user = await UserModel.findById(id);
      res.status(200).json(user);
    } catch (error) {
      return res.status(500).send(errors.message);
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
      return res.status(500).send(errors.message);
    }
  }

  async deleteUser(req, res) {
    try {
      const id = req.params.id;

      const user = await UserModel.findByIdAndRemove(id);
      res.status(200).json(user);
    } catch (error) {
      return res.status(500).send(errors.message);
    }
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

module.exports = UserService;
