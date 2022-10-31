// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const connectToDatabase = require("./src/database/connection");

// dotenv.config();

// connectToDatabase();

// const port = 8080;

// app.use(express.json());

// app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));

// module.exports = app;
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connection");
dotenv.config();

const userRoutes = require("./src/modules/routes/UserRoutes");
const horseRoutes = require("./src/modules/routes/HorseRoutes");
const auctionRoutes = require("./src/modules/routes/AuctionRoutes");

app.use(userRoutes);
app.use(horseRoutes);
app.use(auctionRoutes);

connectToDatabase();

app.get("/", (req, res) => {
  express.json({});
});
