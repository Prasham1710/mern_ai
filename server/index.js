import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './mongodb/connect.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.get('/', async (req, res) => {
    res.send('Hello');
})



async function startServer() {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server started on port http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
}
  startServer();