import axios from "axios";
import {base_url} from "./_config";


export const httpLogin = (data) => axios.post(base_url+'/login',data);

export const httpRegistration= (data)=> axios.post(base_url +'/registration',data);

export const httpChangePassword = (data)=>axios.put(base_url+`/change-password`,data);

export const httpForgotPassword =(data)=>axios.post(base_url+`/forgot-password`,data);