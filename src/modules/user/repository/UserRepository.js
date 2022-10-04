import User from "../model/User.js";

class UserRepository{
    async save(user){
        await banco.sync();
        try{
            return await User.create({
                id: user.id,
                nome: user.nome,
                ra: user.valor
            })
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findById(id){
        await banco.sync();
        try{
            return await User.findByPk(id)
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findAll(){
        await banco.sync();
        try{
            return await User.findAll()
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async deleteById(id){
        await banco.sync();
        try{
            const user = await User.findByPk(id)
            return await user.destroy()
        }catch(err){
            console.error(err.message);
            return null;
        }
    }


}

export default new UserRepository();