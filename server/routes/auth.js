
import express from 'express';
const AuthRoute = express.Router();
import authController from '../app/controllers/authController.js'
import checkUserAuth from '../app/middleware/authMiddleware.js';
// import passport from "passport";
// import passportConfig from '../config/passport';
// passportConfig(passport);



// middleware
// AuthRoute.use('/registration', passport.authenticate('jwt', {session: false}));
AuthRoute.use('/registration', checkUserAuth);
AuthRoute.use('/change-password', checkUserAuth);
// AuthRoute.use('/users', checkUserAuth);
// AuthRoute.use('/users/:id', checkUserAuth);
AuthRoute.use('/change-user-status',checkUserAuth);
AuthRoute.use('/remove-user/:id',checkUserAuth);


//   End of middlweare

AuthRoute.post('/login',authController.login);
AuthRoute.post('/registration',authController.registration);
// AuthRoute.get('/users',authController.getAllUser);
// AuthRoute.get('/users/:id',authController.getAllUser);
AuthRoute.post('/change-password',authController.changePassword);
AuthRoute.put('/change-user-status',authController.changeUserStatus);
AuthRoute.delete('/remove-user/:id',authController.removeUser);

// AuthRoute.route('/:id')
//         .get(getUser)
//         .put(updateUsers)
//         .delete(deleteUser);

export default AuthRoute;