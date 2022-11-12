import {
  RequestRegistration,
  RequestHandeler,
  RequestLogin,
} from "../../helper/requestHandler.js";
import authServices from "../services/authServices.js";
import Validator from "validatorjs";
import {
  RegistrationValidation,
  LoginValidation,
  MenuErrorMessage,
} from "../../utils/ValidationRules.js";

class authController {
  constructor() {}
  /*


  */
  async login(req, res) {
    const request = RequestLogin(req);
    console.log("LOGIN DATA", request)
    let validation = new Validator(
      request.body,
      LoginValidation,
      MenuErrorMessage
    );
    if (validation.check()) {
      authServices
        .login(request)
        .then((data) => res.status(data.status).json(data))
        .catch((err) => console.log(err.message));
    } else {
      res.status(404).send(validation.errors);
    }
  }

  async registration(req, res) {
    let validation = new Validator(
      req.body,
      RegistrationValidation,
      MenuErrorMessage
    );
    if (validation.check()) {
      const request = RequestRegistration(req);

      authServices
        .registration(request)
        .then((data) => res.status(data.status).json(data.data));
    } else {
      res.status(404).send(validation.errors);
    }
  }
  async changePassword(req, res) {
    const request = RequestHandeler(req);
    authServices
      .changePassword(request)
      .then((data) => res.status(data.status).json(data.data))
      .catch((err) => console.log(err.message));
  }

  async getAllUser(req, res) {
    authServices
      .allUsers()
      .then((data) => res.status(data.status).json(data.data))
      .catch((err) => console.log(err.message));
  }
  
  async changeUserStatus(req,res){
    const request = RequestHandeler(req);
    authServices
    .changeUserStatus(request)
    .then((data) => res.status(data.status).json(data))
    .catch((err) => console.log(err.message));
  }

  async removeUser(req, res) {
    const request = RequestHandeler(req);
    authServices
      .removeUser(request)
      .then((data) => res.status(data.status).json(data))
      .catch((err) => console.log(err.message));
  }
}
export default new authController();
