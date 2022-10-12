import Horse from "../model/Horse.js";

class HorseRepository{

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
        const sql = "CREATE TABLE IF NOT EXISTS cavalo"+
        " (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(100)," +
        " valor INTEGER);"; 
        
        return await conexaoAtiva.query(sql);
    }

    async create(horse){
        await banco.sync();
        try{
            const conexaoAtiva = await conecta();
            const sql = "INSERT INTO cavalo(nome, valor) VALUES (?,?);";
            const parametros = [horse.nome, horse.valor];
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
            const [resultado] = await conexaoAtiva.query("SELECT * FROM cavalo WHERE id = ?;", [id]);
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

    async update(horse){
        await banco.sync();
        try{
            const conexaoAtiva = await conecta();
            const [resultado] = await conexaoAtiva.query("UPDATE cavalo SET nome = ?, valor = ? WHERE id = ?");
            const parametros = [horse.nome, horse.valor, horse.id];
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
            const [resultado] = await conexaoAtiva.query("DELETE FROM cavalo WHERE id = ?;", [id]);
            return resultado;
        }catch(err){
            console.error(err.message);
            return null;
        }
    }


}

export default new HorseRepository();