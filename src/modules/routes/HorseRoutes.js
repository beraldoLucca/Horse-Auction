const app = require("../../../index");

import HorseController from "../controller/HorseController.js";

app.get("/horse/:id", HorseController.findById);
app.post("/horse/create", HorseController.createHorse);
app.delete("/horse/:id", HorseController.deleteHorse);
app.get("/horses", HorseController.findAll);
