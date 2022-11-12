import axios from "axios";
import {base_url} from "./_config";

export const httpGetUsers = () => axios.get(base_url+'/users');


export const httpRegistration= (data)=> axios.post(base_url +'/registration',data);

export const httpUserStatus = (id)=> axios.put(base_url+'/user/user-status-change',id);
export const httpUserRemove = (id)=> axios.delete(base_url+`/remove-user/${id}`);

export const httpGetUserById =(id)=> axios.get(base_url+`/users/${id}`);
export const httpEditingUser = (data)=>axios.put(base_url+'/users/update',data);
