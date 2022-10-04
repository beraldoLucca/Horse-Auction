const Sequelize = require("sequelize");
const banco = require("../../../configuration/db/connection")

const Horse = banco.define("cavalo", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull: false,
        primaryKey: false
    }
});

module.exports = Horse;