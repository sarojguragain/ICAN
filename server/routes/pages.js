import express from 'express';
import pageController from '../app/controllers/pageController';
const PageRoute = express.Router();
import checkUserAuth from "../app/middleware/authMiddleware";

import multer from 'multer';



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

//middleWares

//PageRoute.use('/image-upload' ,checkUserAuth);




// end of middlewares
// Routes End points

// PageRoute.use('/image-upload',upload.single('file'), function (req, res, next) {
  PageRoute.use('/image-upload',upload.single('image'), function (req, res, next) {    
    return res.status(200);
  })
// PageRoute.use('/image-upload',PageController.imageUpload);

export default PageRoute;