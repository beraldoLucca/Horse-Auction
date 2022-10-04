import Horse from "../model/Horse.js";

class HorseRepository{
    async save(horse){
        await banco.sync();
        try{
            return await Horse.create({
                id: horse.id,
                nome: horse.nome,
                valor: horse.valor
            })
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findById(id){
        await banco.sync();
        try{
            return await Horse.findByPk(id)
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findAll(){
        await banco.sync();
        try{
            return await Horse.findAll()
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async deleteById(id){
        await banco.sync();
        try{
            const horse = await Horse.findByPk(id)
            return await horse.destroy()
        }catch(err){
            console.error(err.message);
            return null;
        }
    }


}

export default new HorseRepository();