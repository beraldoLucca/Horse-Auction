const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
  id: {
    type: Number,
    autoIncrement: true,
    primaryKey: true,
  },
  id_horse: {
    type: String,
    required: true,
  },
  id_buyer: {
    type: String,
    required: true,
  },
  auction_value: {
    type: Number,
    required: true,
  },
});

const AuctionModel = mongoose.model("Auction", auctionSchema);

module.exports = AuctionModel;
