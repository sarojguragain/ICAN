import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWTSECRET;
//jwt token Generate
export const  tokenGenerator =(data)=>{
  console.log("jwtSecret",jwtSecret)
    var user =  JSON.parse(JSON.stringify(data))
    const token = jwt.sign({email:user.email}, jwtSecret, {
        expiresIn: 86400 * 30
    });
    return token;
}

//jwt token verification
export const tokenVerify=(token)=>{
  const data =  jwt.verify(token, jwtSecret);
  return data;
}
