import AuctionService from "../service/AuctionService";

class AuctionController {
  async createUser(req, res) {
    return await AuctionService.createUser(req, res);
  }

  async findById(req, res) {
    return await AuctionService.findById(req, res);
  }
  async findAll(req, res) {
    return await AuctionService.findAll(req, res);
  }

  async deleteUser(req, res) {
    return await AuctionService.deleteUser(req, res);
  }

  async updateUser(req, res) {
    return await AuctionService.updateUser(req, res);
  }
}

export default AuctionController;
