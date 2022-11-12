
import express from 'express';
const MenuRoute = express.Router();
import menuController from '../app/controllers/menuController.js';
import checkUserAuth from '../app/middleware/authMiddleware.js';




// middleware
MenuRoute.use('/menu', checkUserAuth);
MenuRoute.use('/modules', checkUserAuth);

//   End of middlweare

MenuRoute.get('/menu',menuController.menues);
MenuRoute.get('/menu/:id', menuController.getMenuById);
MenuRoute.post('/menu',menuController.create);
MenuRoute.put('/menu/:id',menuController.update);
MenuRoute.delete('/menu/:id',menuController.delete);



MenuRoute.get('/modules',menuController.modules);
MenuRoute.get('/modules/:id', menuController.getModuleById);
// MenuRoute.post('/registration',menuController.registration);
// MenuRoute.get('/users',menuController.getAllUser);
// MenuRoute.post('/change-password',menuController.changePassword);

// MenuRoute.route('/:id')
//         .get(getUser)
//         .put(updateUsers)
//         .delete(deleteUser);

export default MenuRoute;