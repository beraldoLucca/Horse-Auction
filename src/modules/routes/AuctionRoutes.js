const router = require("express").Router();

const AuctionController = require("../controller/AuctionController.js");

router.get("/auction/:id", AuctionController.findById);
router.post("/auction/create", AuctionController.createAuction);
router.delete("/auction/delete/:id", AuctionController.deleteAuction);
router.post("/auction/update/:id", AuctionController.updateAuction);
router.get("/auction", AuctionController.findAll);

module.exports = router;
