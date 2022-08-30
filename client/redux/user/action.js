import { actionTypes } from "./type";

export const login = (keyValue) => {
   
    return{
        type: actionTypes.LOGIN,
        payload: keyValue
    };
};

export const LoginSuccess = (keyValue) => {
    return{
        type: actionTypes.LOGIN_SUCCESS,
        payload: keyValue
    };
};
export const UserRegistration =(values)=>{
    console.log("ACTION",values);
    return{
        type:actionTypes.REGISTRATION,
        payload:values
    }
}

export const UserRegistrationSuccess =(data)=>{
    console.log("SUCCESS ACTION",data);
    return{
        type:actionTypes.REGISTRATION_SUCCESS,
        payload:data
    }
}


export const GetUsers = () => {
    return{
        type: actionTypes.GET_USERS
    };
};
export const GetUsersSuccess = (data) => {
    return{
        type: actionTypes.GET_USERS_SUCCESS,
        payload: data
    };
};