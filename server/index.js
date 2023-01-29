import express from 'express';
import * as dotev from 'dotenv';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.get('/', async (req, res) => {
    res.send('Hello');
})

const startServer = async () => {
    app.listen(8080, () => console.log('Server started on port http://localhost:8080'))
}
  startServer();