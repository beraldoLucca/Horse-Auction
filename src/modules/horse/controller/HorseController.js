import HorseService from '../service/VehicleService.js'

class HorseController {

    async createHorse(req, res) {
        let horse = await HorseService.createHorse(req);
        return res.status(horse.status).json(horse);
    }

    async findById(req, res) {
        let horse = await HorseService.findById(req);
        return res.status(horse.status).json(horse);
    }
    async findAll(req, res) {
        let horse = await HorseService.findAll();
        return res.status(horse.status).json(horse);
    }

    async deleteHorse(req,res){
        let horse = await HorseService.deleteHorse(req);
        return res.status(horse.status).json(horse);
    }
}

module.exports = HorseController