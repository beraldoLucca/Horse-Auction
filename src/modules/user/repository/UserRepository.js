import User from "../model/User.js";

class UserRepository{
    async save(user){
        try{
            return await User.create(user)

        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findById(id){
        try{
            return await User.findById(id)
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findAll(){
        try{
            return await User.find()
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async deleteById(id){
        try{
            return await User.findByIdAndDelete(id)
        }catch(err){
            console.error(err.message);
            return null;
        }
    }


}

export default new UserRepository();