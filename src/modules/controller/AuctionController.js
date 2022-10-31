const AuctionModel = require("../model/Auction");

class AuctionController {
  async createAuction(req, res) {
    try {
      const auction = await AuctionModel.create(req.body);
      res.status(201).json(auction);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async findById(req, res) {
    try {
      const id = req.params.id;

      const auction = await AuctionModel.findById(id);
      res.status(200).json(auction);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async updateAuction(req, res) {
    try {
      const id = req.params.id;

      const auction = await AuctionModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(auction);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async deleteAuction(req, res) {
    try {
      const id = req.params.id;

      const auction = await AuctionModel.findByIdAndRemove(id);
      res.status(200).json(auction);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async findAll(req, res) {
    try {
      const auction = await AuctionModel.find({});

      res.status(200).json(auction);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = new AuctionController();
