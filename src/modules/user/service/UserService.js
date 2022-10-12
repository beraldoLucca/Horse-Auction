// import UserException from '../exception/UserException.js'
import UserRepository from '../repository/UserRepository.js';

class UserService {

    async createUser(req){
        try{
            let userData = req.body;
        //PEGAR TOKEN
        validateUserData(userData);
        let user = createInitialUser(userData);
        let createdUser = await UserRepository.create(user);
        let response = {
            status: 200,
            createdUser,
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
            const existingUser = await UserRepository.findById(id);
            if(!existingUser){
                throw new UserException(400, "The user was not found.")
            }

            let response = {
                status: 200,
                existingUser,
            }
            return response;
        }catch(err){
            return{
                status: err.status ? err.status : 500,
                message: err.message,
            }
        }
    }

    async updateUser(req){
        try{
            let userData = req.body;
        //PEGAR TOKEN
        validateUserData(userData);
        let user = findById(userData)
        let updatedUser = await UserRepository.update(user);
        let response = {
            status: 200,
            updatedUser,
        }
        return response
        }catch(err){
            return {
                status: err.status ? err.status : 500,
                message: err.message,

            }
        }
    }

    async deleteUser(req) {
        try{
            const { id } = req.params;
            this.validateInformedId(id);
            const existingUser = await UserRepository.deleteById(id);
            if(!existingUser){
                throw new UserException(400, "The user was not found.")
            }

            let response = {
                status: 200,
                existingUser,
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
            const users = await UserRepository.findAll();
            if(!users) {
                throw new UserException(400, "No users were found.")
            }
            let response = {
                status: 200,
                users,
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
            throw new UserException(400, "The user ID must be informed.");
        }
    }

    createInitialUser(userData){
        return {
            name: userData.name,
            brand: userData.brand,
            year: userData.year,
            value: userData.value,
            createdAt: new Date(),
        }
    }

    validateUserData(data){
        if(!data){
            throw new UserException(400, 'The user data is not informed')
        }
    }
}

export default new UserService();