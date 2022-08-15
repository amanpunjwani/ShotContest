import express from 'express';
import props from './config/properties';
import db from './config/db';
import bodyParser from 'body-parser';
import shotRoutes from './routes';
import cors from 'cors'


db();

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors())

var shotRouter= express.Router();
shotRoutes(shotRouter);
app.use('/shotcontestapi',shotRouter);

app.listen(props.PORT,(err)=>{
    if(err) console.log(err);
    console.log("Application Started On Port: "+props.PORT);
})