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

export function CreateError (res = {}) {
    return Object.freeze({
        success:true,
        status:201,
        message:"Unable to create data ",
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
            token:res.token
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
        message:"User Not Found",
        error:res.message
    });
}