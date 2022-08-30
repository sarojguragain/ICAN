import RequestHandeler from "../../helper/requestHandler.js";


// export default function authController({authServices}){
   

    //  async function login (req) {
    //     const request = RequestHandeler(req);
    //     authServices.login(request).then((data)=>res.status(data.status).json(data));
    //   }
      
    //   function registration (req) {
    //     const request = RequestHandeler(req);
    //     authServices.registration(request).then((data)=>res.status(data.status).json(data));
    //   }

//       return Object.freeze({
//         login,
//         registration,
//         forgotPassword,
//         changePassword,
//       })
// }

import authService from "../services/authServices.js";


class authController{
  constructor (){}

   async  login (req) {
    const request = RequestHandeler(req);
    console.log("CONTROLLER LOGIN",request);
    //  authServices.login(request).then((data)=>res.status(data.status).json(data));
  }
  
  async  registration (req) {
    const request = RequestHandeler(req);
    // console.log("CONTROLLER REGISTRATION",request);
    authServices.registration(request).then((data)=>res.status(data.status).json(data));
  }
}
export default new authController();