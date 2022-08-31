import {RequestRegistration,RequestHandeler,RequestLogin} from "../../helper/requestHandler.js";
import authServices from "../services/authServices.js";


class authController{
  constructor (){}

   async  login (req,res) {
    const request = RequestLogin(req);
    console.log("CONTROLLER LOGIN",request);
     authServices.login(request).then((data)=>res.status(data.status).json(data));
  }
  
  async  registration (req,res) {
    const request = RequestRegistration(req);
    authServices.registration(request).then((data)=>res.status(data.status).json(data));
  }
}
export default new authController();