import HorseException from '../exception/HorseException.js'
import HorseRepository from '../repository/HorseRepository.js';

class HorseService {

    async createHorse(req){
        try{
            let horseData = req.body;
        //PEGAR TOKEN
        validateHorseData(horseData);
        let horse = createInitialHorse(horseData);
        let createdHorse = await HorseRepository.save(horse);
        let response = {
            status: 200,
            createdHorse,
        }
        return response
        }catch(err){
            return {
                status: err.status ? err.status : 500,
                message: err.message,

            }
        }
    }


    async findById(req) {
        try{
            const { id } = req.params;
            this.validateInformedId(id);
            const existingHorse = await HorseRepository.findById(id);
            if(!existingHorse){
                throw new HorseException(400, "The horse was not found.")
            }

            let response = {
                status: 200,
                existingHorse,
            }
            return response;
        }catch(err){
            return{
                status: err.status ? err.status : 500,
                message: err.message,
            }
        }
    }

    async deleteHorse(req) {
        try{
            const { id } = req.params;
            this.validateInformedId(id);
            const existingHorse = await HorseRepository.deleteById(id);
            if(!existingHorse){
                throw new HorseException(400, "The horse was not found.")
            }

            let response = {
                status: 200,
                existingHorse,
            }
            return response;
        }catch(err){
            return{
                status: err.status ? err.status : 500,
                message: err.message,
            }
        }
    }

    async findAll() {
        try{
            const horses = await HorseRepository.findAll();
            if(!horses) {
                throw new HorseException(400, "No horses were found.")
            }
            let response = {
                status: 200,
                horses,
              };
            
            return response;

        }catch(err){
            return{
                status: err.status ? err.status : 500,
                message: err.message,
            }
        }
    }

    validateInformedId(id){
        if(!id){
            throw new HorseException(400, "The horse ID must be informed.");
        }
    }

    createInitialHorse(horseData){
        return {
            name: horseData.name,
            brand: horseData.brand,
            year: horseData.year,
            value: horseData.value,
            createdAt: new Date(),
        }
    }

    validateHorseData(data){
        if(!data){
            throw new HorseException(400, 'The horse data is not informed')
        }
    }
}

export default new HorseService();