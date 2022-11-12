import Validator from "validatorjs";
import { RequestHandeler } from "../../helper/requestHandler";
import {
  EditUserValidation,
  MenuErrorMessage,
} from "../../utils/ValidationRules";
import userServices from "../services/userServices";

class userController {
  constructor() {}

  async users(req, res) {
    userServices
      .users()
      .then((data) => res.status(data.status).json(data))
      .catch((err) => err.message);
  }

  async userById(req, res) {
    const request = RequestHandeler(req);
    userServices
      .userById(request.params.id)
      .then((data) => res.status(data.status).json(data))
      .catch((err) => console.log(err.message));
  }

  async userEdit(req, res) {
    let validation = new Validator(
      req.body,
      EditUserValidation,
      MenuErrorMessage
    );
    if(validation.check()){
      const request = RequestHandeler(req);
      userServices
      .editUser(request.body)
      .then((data)=>res.status(data.status).json(data))
      .catch((err)=>console.log(err.message));
    }
  }

  async userStatusChange(req,res){
    const request = RequestHandeler(req);

    userServices
    .userStatusChange(request)
    .then((data)=>res.status(data.status).json(data))
    .catch((err)=>console.log(err.message));
  }

  
}
export default new userController();
