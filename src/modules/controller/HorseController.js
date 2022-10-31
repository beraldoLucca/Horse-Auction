const HorseModel = require("../model/Horse");

class HorseController {
  async createHorse(req, res) {
    try {
      const horse = await HorseModel.create(req.body);
      res.status(201).json(horse);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async findById(req, res) {
    try {
      const id = req.params.id;

      const horse = await HorseModel.findById(id);
      res.status(200).json(horse);
    } catch (error) {
      return res.status(500).send(error.message);
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
      return res.status(500).send(error.message);
    }
  }

  async deleteHorse(req, res) {
    try {
      const id = req.params.id;

      const horse = await HorseModel.findByIdAndRemove(id);
      res.status(200).json(horse);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async findAll(req, res) {
    try {
      const horse = await HorseModel.find({});

      res.status(200).json(horse);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = new HorseController();
