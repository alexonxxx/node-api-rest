import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnect } from "./config/mongo.js";
import tracks from "./application/routes/tracks.js";
import storage from "./application/routes/storage.js";
dotenv.config()
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static("storage"))

app.use("/api/tracks", tracks);
app.use("/api/storage", storage);

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
