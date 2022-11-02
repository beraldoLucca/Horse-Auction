import jwt from "jsonwebtoken";
import {promisify} from "util"
import * as secrets from '../secrets.js'

export default async(req, res, next) => {
    try{
        let { authorization } = req.headers;

        if(!authorization){
            throw new Error("Usuário não autorizado")
        }
        let accessToken = authorization;
        if(accessToken.includes(" ")){
            accessToken = accessToken.split(" ")[1];
        }else{
            accessToken = authorization;
        }
        const decoded = await promisify(jwt.verify)(accessToken, secrets.API_SECRET);
        req.authUser = decoded.authUser;
        return next();

    }catch(err){
        const status = err.status ? err.status : 500;
        return res.status(status).json({status, message: err.message});
    }
}