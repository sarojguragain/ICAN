
import express from 'express';
const AuthRoute = express.Router();
import authController from '../app/controllers/authController.js'


AuthRoute.route('/login').post(authController.login);
AuthRoute.route('/registration').post(authController.registration);
// AuthRoute.route('/:id')
//         .get(getUser)
//         .put(updateUsers)
//         .delete(deleteUser);

export default AuthRoute;