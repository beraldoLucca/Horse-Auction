const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connection");

dotenv.config();

connectToDatabase();

const port = 8080;

app.use(express.json());

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));

module.exports = app;
