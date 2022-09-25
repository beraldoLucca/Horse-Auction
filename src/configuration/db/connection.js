const Sequelize = require("sequelize");

const sequelize = new Sequelize("sql10519389", "sql10519389",
 "MwJU146mWa",{
    host: "sql10.freemysqlhosting.net",
    dialect: "mysql",
    port: 3306,
    logging: false
});
/*
(async function() {
    //console.log("função chamada")
    try{
        await sequelize.authenticate();
        console.log("conectou com sucesso")
    }catch(error){
        console.log(error);
    }
    
})();
*/
module.exports = sequelize;