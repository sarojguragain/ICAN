import sequelize from "sequelize";
import { ReturnResponse ,ErrorResponse, Created} from "../../helper/responseHandeler";
import models from './../models/index'


const Menu = models.Menu;
const Module = models.Module;
class menuServices{
    constructor(){}

    async menues (){
       return await Menu.findAll({ include: Module }).then((data)=> ReturnResponse(data)).catch((err)=>ErrorResponse(err));
    }
    async getMenuById (id){
        return await Menu.findOne({ where: { id: id }, include: Module }).then((data)=> ReturnResponse(data)).catch((err)=>ErrorResponse(err));
     }
     async create(req){
      console.log("Service Request",req.body)
      // return await await Menu.create(req.body).then((data)=>console.log("CREATE",data)).catch((err)=>console.log("ERROR",err.message));
      return await Menu.create(req.body).then((data)=>Created(data)).catch((err)=>console.log("ERROR",err.message));
     }

    async modules (){
        return await Module.findAll().then((data)=> ReturnResponse(data)).catch((err)=>ErrorResponse(err));
     }
     async getModuleById (id){
      return await Module.findOne({ where: { id: id }, include: Menu }).then((data)=> ReturnResponse(data)).catch((err)=>ErrorResponse(err));
   }

}

export default new menuServices();