import Jwt  from "jsonwebtoken";
import models from '../models/index'
import { tokenVerify } from "../../helper/tokenGenerator";

const User = models.User;
const Role = models.Role;
var checkUserAuth = async(req, res, next) => {

let token 
const {authorization} =req.headers;
if(authorization && authorization.startsWith('Bearer')){
    try{
        token= authorization.split(' ')[1]
        //verify token
       const data = tokenVerify(token);
       
       const {email} = data;
       req.user = await User.findOne({ where:{email:email},attributes: {exclude: ['password']}});
       return next();
    }catch(err){
        console.log("Error",err.message)
    }
}else{
    res.status(401).json({ msg: 'You are not allowed to visti this page' });
}
   
}

export default checkUserAuth