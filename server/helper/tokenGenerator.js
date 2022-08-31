import jwt from 'jsonwebtoken';


const  tokenGenerator =(data)=>{
    const token = jwt.sign({username:data.username, email:data.email, role:data.role},"ICANWetwebtokensecret",{ expiresIn: "2h" });
    console.log("TOKEN",token)
    return token;
}
export default tokenGenerator;
