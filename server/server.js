import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import AuthRoute from './routes/auth.js'
import cors from'cors';


const app = express();
// const dotenv= dotenv();
//middlewares
app.use(cors({
    origin: '*'
}));
app.all('*', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token");
    next();
});

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '50mb','extended': 'true'}));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//Routes

app.use('/api',AuthRoute);

// End of Routes
export default app;