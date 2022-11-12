import { RequestHandeler } from "../../helper/requestHandler";
import  Validator from 'validatorjs';

import menuServices from "../services/menuServices";
import { MenuValidation ,MenuErrorMessage} from "../../utils/ValidationRules";
class MenuController{
    constructor(){}

    //menues
    async modules(req,res){
        const request = RequestHandeler(req);
        menuServices.modules(request).then((data)=>res.status(data.status).json(data)).catch((err)=>console.log(err.message));
    }

    async getModuleById(req,res){
        const request = RequestHandeler(req);
        console.log("ID",request)
        menuServices.getModuleById(request.params.id).then((data)=>res.status(data.status).json(data)).catch((err)=>console.log(err.message));
    }
    async  create(req,res){
        const request = RequestHandeler(req);
        
        
        let validation = new Validator(request.body);
        if(validation.check()){
            menuServices.create(request).then((data)=>res.status(data.status).json(data)).catch((err).res.status(data.status).json(data));
        }
        else{
            res.status(101);
        }
     
    }
    async  update(req,res){
        const request = RequestHandeler(req);
        menuServices.update(request).then((data)=>res.status(data.status).json(data)).catch((err).res.status(data.status).json(data));
    }
    async  delete(req,res){
        const request = RequestHandeler(req);
        menuServices.delete(request).then((data)=>res.status(data.status).json(data)).catch((err).res.status(data.status).json(data));
    }
//End of Menu

// start of module

    async menues(req,res){
        const request = RequestHandeler(req);
        menuServices.menues(request).then((data)=>res.status(data.status).json(data)).catch((err)=>console.log(err.message));
    }
    async getMenuById(req,res){
        const request = RequestHandeler(req);
        menuServices.getMenuById(request.params.id).then((data)=>res.status(data.status).json(data)).catch((err)=>console.log(err.message));
    }
    async create(req,res){
        
        const request = RequestHandeler(req);
        let validation = new Validator(request.body, MenuValidation,MenuErrorMessage);
        if(validation.check()){
        menuServices.create(request).then((data)=>res.status(data.status).json(data)).catch((err)=>console.log(err.message));
        }else{
            res.status(404).send(validation.errors);

        }
    }
    async  update(req,res){
        const request = RequestHandeler(req);
        menuServices.update(request).then((data)=>res.status(data.status).json(data)).catch((err).res.status(data.status).json(data));
    }
    async  delete(req,res){
        const request = RequestHandeler(req);
        menuServices.delete(request).then((data)=>res.status(data.status).json(data)).catch((err).res.status(data.status).json(data));
    }
    // end of module
}

export default new MenuController();