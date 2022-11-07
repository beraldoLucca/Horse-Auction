// import UserService from "../service/UserService";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
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

  async getAcessToken(req, res) {
    try {
      const email = req.body.email;

      const user = await UserModel.findOne(email);

      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({ id: user._id }, req.app.get("secretKey"), {
          expiresIn: "1h",
        });
        res.status(200).json({
          status: "success",
          message: "user found!!!",
          data: { user: user, token: token },
        });
      }
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }

  //   async getAcessToken(req, res){
  //     try{
  //       const {cpf, password} = req.body;
  //       let user;
  //       if(cpf){
  //         console.log("aoba")
  //         user = await UserModel.findOne({ where: {cpf}});
  //       }
  //       // this.validateCpfAndPassword(cpf, password);
  //       // let user = await UserModel.findOne({ where: {cpf}});
  //       // this.validateUser(user);
  //       // await this.validatePassword(password, user.password);
  //       const authUser = {id: user._id, nome: user.nome, cpf: user.cpf, senha: user.senha};
  //       console.log(authUser)
  //       const accessToken = jwt.sign({authUser}, "pw4",{expiresIn: '1d'});
  //       return{
  //         status: 200,
  //         accessToken,
  //       }
  //     }catch(error){
  //       return res.status(500).send(error.message);
  //     }

  //   }

  //   async validateCpfAndPassword(cpf, password){
  //     console.log("ei")
  //     if(!cpf || !password){
  //       throw new Error("Usuário não autorizado");
  //     }
  //     console.log("oi 2")
  //   }

  //   validateUser(user){
  //     if(!user){
  //       throw new Error("Usuário não encontrado");
  //     }
  //   }

  //   async validatePassword(password, hashPassword){
  //     if(!await bcrypt.compare(password, hashPassword)){
  //       throw new Error("A senha não está correta!");
  //     }
  //   }
}

module.exports = new UserController();
