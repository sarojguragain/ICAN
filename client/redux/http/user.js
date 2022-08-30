import axios from "axios";
import {base_url} from "./_config";

export const httpGetUsers = () => axios.get(`http://localhost:5000/api/users`);

export const httplogin = (data) => axios.post(base_url+'/login',data);

export const httpRegistration= (data)=> axios.post(base_url +'/registration',data);