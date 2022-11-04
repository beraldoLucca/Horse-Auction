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
const bodyParser = require("body-parser");
dotenv.config();

const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const middleware = require("i18next-http-middleware");
const userRoutes = require("./src/modules/routes/UserRoutes");
const horseRoutes = require("./src/modules/routes/HorseRoutes");
const auctionRoutes = require("./src/modules/routes/AuctionRoutes");
const checkToken = require("./src/config/middlewares/token");

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "pt",
    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
    },
  });

app.use(middleware.handle(i18next));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(horseRoutes);
app.use(auctionRoutes);

connectToDatabase();

app.use(checkToken);

app.get("/", (req, res) => {
  express.json({});
});

const port = 3000;
app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
