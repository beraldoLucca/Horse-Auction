const mongoose = require("mongoose");

const horseSchema = new mongoose.Schema({
  id: {
    type: Number,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  mother_name: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  born_date: {
    type: String,
    required: true,
  },
  local: {
    type: String,
    required: true,
  },
});

const HorseModel = mongoose.model("Horse", horseSchema);

module.exports = HorseModel;
