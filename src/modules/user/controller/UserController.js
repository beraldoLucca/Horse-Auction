import UserService from '../service/UserService.js';

class UserController {

    async createUser(req, res) {
        let user = await UserService.createUser(req);
        return res.status(user.status).json(user);
    }

    async findById(req, res) {
        let user = await UserService.findById(req);
        return res.status(user.status).json(user);
    }
    async findAll(req, res) {
        let user = await UserService.findAll();
        return res.status(user.status).json(user);
    }

    async deleteUser(req,res){
        let user = await UserService.deleteUser(req);
        return res.status(user.status).json(user);
    }
}

module.exports = UserController