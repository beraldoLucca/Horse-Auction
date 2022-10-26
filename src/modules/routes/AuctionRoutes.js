const app = require("../../../index");

import AuctionController from "../controller/AuctionController.js";

app.get("/auction/:id", AuctionController.findById);
app.post("/auction/create", AuctionController.createAuction);
app.delete("/auction/:id", AuctionController.deleteAuction);
app.get("/auctions", AuctionController.findAll);
