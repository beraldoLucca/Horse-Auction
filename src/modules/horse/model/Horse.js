const horseSchema = new mongoose.Schema({
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
});

const HorseModel = mongoose.model("Horse", horseSchema);

module.exports = HorseModel;
