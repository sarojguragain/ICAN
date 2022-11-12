import { DataRowMessage } from "pg-protocol/dist/messages";

export function AleradyExist(res = {}) {
    return Object.freeze({
        success:true,
        status:409,
        message:"Data Already exist",
        error:res.message
    });
}
export function Created (res = {}) {
    return Object.freeze({
        success:true,
        status:201,
        message:"Data Created successfully",
        error:res.message
    });
}
export function Updated (res = {}) {
      
    return Object.freeze({
        success:true,
        updated:true,
        status:204,
        message:"resource updated successfully",
    });
}
export function CreateError (res = {}) {
    return Object.freeze({
        success:true,
        status:201,
        message:"Unable to Perform Action",
        error:res.message
    });
}
export function Login (res = {}) {
    return Object.freeze({
        success:true,
        status:201,
        message:"Logged in successfully",
        error:res.message,
        data:{
            name:res.name,
            username:res.username,
            email:res.email,
            phone:res.phone,
            token:res.token,
            role:{
                role:res.Role.role,
                roleId:res.Role.id,
                roleId:res.RoleId
            }
        }
    });
}
export function InvalidLogin (res = {}) {
    return Object.freeze({
        success:true,
        status:200,
        message:"Invalid Credentials",
        error:res.message
    });
}

export function NotFound (res = {}) {
    return Object.freeze({
        success:true,
        status:404,
        data:res,
        message:"User Not Found",
        error:res.message
    });
}

export function AllUsers(res={}){
    return Object.freeze({
        success:true,
        status:200,
        data:res,
        message:res.message,
        error:res.message
    })
}

export function ReturnResponse(res={}){
    return Object.freeze({
        success:true,
        message:'Data Found',
        status:200,
        data:res,
    })
}
export function ErrorResponse(res={}){
    return Object.freeze({
        success:true,
        status:500,
        data:res,
        error:res.message
    })
}

export function Removed(res={}){
    return Object.freeze({
        success:true,
        status:200,
        message:"Deleted successfully",      
    })
}
export function Conflict(res={}){
    return Object.freeze({
        success:true,
        status:409 ,
        message:"Request could not be processed",
        error:res.message
    })
}