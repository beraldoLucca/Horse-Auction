import Horse from "../model/Horse.js";

class HorseRepository{
    async save(horse){
        try{
            return await Horse.create(horse)

        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findById(id){
        try{
            return await Horse.findById(id)
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findAll(){
        try{
            return await Horse.find()
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async deleteById(id){
        try{
            return await Horse.findByIdAndDelete(id)
        }catch(err){
            console.error(err.message);
            return null;
        }
    }


}

export default new HorseRepository();