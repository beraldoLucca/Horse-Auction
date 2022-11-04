const jwt = require("jsonwebtoken");
const {promisify} = require("util");

async function CheckToken(req, res, next) {
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
        const decoded = await promisify(jwt.verify)(accessToken, "pw4");
        req.authUser = decoded.authUser;
        return next();

    }catch(err){
        const status = err.status ? err.status : 500;
        return res.status(status).json({status, message: err.message});
    }
}

module.exports = CheckToken;