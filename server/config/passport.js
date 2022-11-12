import PassportJwt from 'passport-jwt';
import models from "../app/models/index";


const JWTStrategy = PassportJwt.Strategy;
const ExtractJWT  = PassportJwt.ExtractJwt;
//load up the user model
const User =  models.User;
const Role = models.Role;
 

export default function(passport){
    const opts = {
      jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
      secretOrKey: 'nodeauthsecret',
    };
    passport.use('jwt', new JWTStrategy(opts, function(jwt_payload, done) {
      User
        .findByPk(jwt_payload.id)
        .then((user) => { return done(null, user); })
        .catch((error) => { return done(error, false); });
    }));
  };



  export const hash=(data)=>{
    User.beforeSave(async (user, options) => {
      if (user.password) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        return user;
      }
    });
  }

   export const passwordCompare=(data1,data2)=>{
      bcrypt.compare(data1, data2, function (err, isMatch) {
          if (err) {
              return cb(err);
          }
          cb(null, isMatch);
      });
  }

