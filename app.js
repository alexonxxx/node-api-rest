import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('listening on port:' + process.env.PORT);
});