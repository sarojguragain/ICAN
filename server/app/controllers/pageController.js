import fileUpload from '../middleware/upload-middleware';
import multer from 'multer';

const  PageController = {


    uploadFile:function(req,res){
        
        // var upload = multer({
        //             storage: fileUpload.files.storage, 
        //             allowedFile:fileUpload.files.allowedFile 
        //             }).single('file');
        // upload(req, res, function (err) {
        //    if (err instanceof multer.MulterError) {
        //       res.send(err);
        //    } else if (err) {
        //       res.send(err);
        //    }else{
        //       res.render('upload-form');
        //    }
           
        // })
        
     }
    
}

export default  PageController;