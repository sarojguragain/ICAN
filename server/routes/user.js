import express from 'express';
import userController from '../app/controllers/userController';
import checkUserAuth from '../app/middleware/authMiddleware';
const UserRoute =express.Router();

// Middleware

UserRoute.use('/users',checkUserAuth);
UserRoute.use('/users/:id',checkUserAuth)
UserRoute.use('/user/update',checkUserAuth)
UserRoute.use('/user/user-status-change',checkUserAuth)


// Routes

UserRoute.get('/users',userController.users)
UserRoute.get('/users/:id',userController.userById)
UserRoute.put('/users/update',userController.userEdit)
UserRoute.put('/user/user-status-change',userController.userStatusChange)
export default UserRoute;