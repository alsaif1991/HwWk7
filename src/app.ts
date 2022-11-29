import express from 'express';
import manageRout from './routs/managersw.router'
import 'dotenv/config';
import { connectDB } from './config/db';
const app = express();
 connectDB();
////middleware 

    app.use(express.json());
    app.use('/api/v1/bookmanage', manageRout);
    const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log('server running port: '+ PORT); 
});