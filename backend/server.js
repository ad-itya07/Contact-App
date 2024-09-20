import express from 'express';
import dotenv from 'dotenv';
import homeRoute from './routes/homeRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', homeRoute);
app.listen(port, () => {   
    console.log(`Server is running on port ${port}`);
});