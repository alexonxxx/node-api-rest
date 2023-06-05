import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnect } from "./config/mongo.js";
dotenv.config()
const app = express();

app.use(cors());
const port = process.env.PORT || 3000;
try {
    await dbConnect();
    app.listen(port, () => {
        console.log('listening on port:' + process.env.PORT);
    });
} catch (error) {
    console.error(error);
    process.exit(1);
}
