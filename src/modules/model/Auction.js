const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
  id: {
    type: Number,
    autoIncrement: true,
    required: true,
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

const AuctionModel = mongoose.model("Auction", auctionSchema);

module.exports = AuctionModel;
