const express = require("express");
const HorseModel = require("../model/Horse");

class HorseService {
  async createHorse(req, res) {
    try {
      const id = req.params.id;

      const Horse = await HorseModel.findById(id);
      res.status(200).json(Horse);
    } catch (error) {
      return res.status(500).send(errors.message);
    }
  }

  async findById(req, res) {
    try {
      const id = req.params.id;

      const horse = await HorseModel.findById(id);
      res.status(200).json(horse);
    } catch (error) {
      return res.status(500).send(errors.message);
    }
  }

  async updateHorse(req, res) {
    try {
      const id = req.params.id;

      const horse = await HorseModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(horse);
    } catch (error) {
      return res.status(500).send(errors.message);
    }
  }

  async deleteHorse(req, res) {
    try {
      const id = req.params.id;

      const horse = await HorseModel.findByIdAndRemove(id);
      res.status(200).json(horse);
    } catch (error) {
      return res.status(500).send(errors.message);
    }
  }

  async findAll(req, res) {
    try {
      const horse = await HorseModel.find({});

      res.status(200).json(horse);
    } catch (error) {
      return res.status(500).send(errors.message);
    }
  }
}

export { HorseService };
