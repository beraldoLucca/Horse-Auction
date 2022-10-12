import User from "../model/User.js";
const banco = require("../../../configuration/db.js")

class UserRepository{

    async conecta(){
        //tirar as informações e colocar numa variável de ambiente ou .env
        //dontpad.com/pw4
        const conexao = await banco.createConnection({
            host: "sql10.freemysqlhosting.net",
            port: 3306,
            database: "sql10519389",
            user: "sql10519389",
            password: "MwJU146mWa"        
        }
        );
        return conexao;
    }

    async criaTabela(){
        console.log("Criando a tabela Usuários");
        const conexaoAtiva = await conecta();
        const sql = "CREATE TABLE IF NOT EXISTS usuario"+
        " (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(100)," +
        " senha VARCHAR(100));"; 
        
        return await conexaoAtiva.query(sql);
    }

    async create(user){
        await banco.sync();
        try{
            const conexaoAtiva = await conecta();
            const sql = "INSERT INTO usuario(nome, senha) VALUES (?,?);";
            const parametros = [user.nome, user.senha];
            return await conexaoAtiva.query(sql, parametros);
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findById(id){
        await banco.sync();
        try{
            const conexaoAtiva = await conecta();
            const [resultado] = await conexaoAtiva.query("SELECT * FROM usuario WHERE id = ?;", [id]);
            return resultado;
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findAll(){
        await banco.sync();
        try{
            const conexaoAtiva = await conecta();
            const [resultado] = await conexaoAtiva.query("SELECT * FROM usuario");
            return resultado;
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async update(user){
        await banco.sync();
        try{
            const conexaoAtiva = await conecta();
            const [resultado] = await conexaoAtiva.query("UPDATE usuario SET nome = ?, senha = ? WHERE id = ?");
            const parametros = [user.nome, user.senha, user.id];
            return await conexaoAtiva.query(sql, parametros);
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async deleteById(id){
        await banco.sync();
        try{
            const conexaoAtiva = await conecta();
            const [resultado] = await conexaoAtiva.query("DELETE FROM usuario WHERE id = ?;", [id]);
            return resultado;
        }catch(err){
            console.error(err.message);
            return null;
        }
    }


}

export default new UserRepository();