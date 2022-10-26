const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    autoIncrement: true,
    required: true,
    primaryKey: true,
  },
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  data_nascimento: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
