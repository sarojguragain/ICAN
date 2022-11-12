import express from 'express';
import roleController from '../app/controllers/roleController.js';
const RoleRoute = express.Router();
import checkUserAuth from '../app/middleware/authMiddleware.js';


// Middleware
RoleRoute.use('/roles', checkUserAuth);
// RoleRoute.use('/roles/', checkUserAuth);




//Route
RoleRoute.get('/roles',roleController.roles);
RoleRoute.post('/roles',roleController.create);
RoleRoute.get('/roles/:id',roleController.getById);
/**
 * Route params: id
 */
RoleRoute.put('/roles/:id',roleController.update);
RoleRoute.delete('/roles/:id',roleController.delete);


export default RoleRoute;