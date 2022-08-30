import sequelize from "sequelize";
// import models from "../models";
import models from '../models/index.js'
import  bcrypt from 'bcryptjs';
import { AleradyExist ,NotFound,Created,Login,InvalidLogin} from '../../helper/responseHandeler'





const User = models.User;
const Op = sequelize.Op;


class authService{
  constructor(){}
  // async  login (req) {
       
  // }
  
  async  registration (req) {
    console.log("SERVICE REQUEST",req)
    try {
        let checkdata = await User.findOne({ where: { email: req.body.email } });
        if(checkdata) return AleradyExist(checkdata);
        else{
          req.body.password = bcrypt.hashSync(req.body.password, 8)
          let createdata = await User.create(req.body);
          if (createdata) {
            return Created(createdata);
          }
        }
      } catch (err) {
        console.log(err.message);
      }
  }

}
export default  new authService();