import HorseService from "../service/HorseService";

class HorseController {
  async createUser(req, res) {
    return await HorseService.createUser(req, res);
  }

  async findById(req, res) {
    return await HorseService.findById(req, res);
  }
  async findAll(req, res) {
    return await HorseService.findAll(req, res);
  }

  async deleteUser(req, res) {
    return await HorseService.deleteUser(req, res);
  }

  async updateUser(req, res) {
    return await HorseService.updateUser(req, res);
  }
}

export default HorseController;
