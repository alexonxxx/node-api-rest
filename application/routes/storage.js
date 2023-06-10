import express from 'express';
import multer from 'multer';
import { createStorage } from '../../infrastructure/controllers/storage.js';
import uploadMiddleware from '../middlewares/upload.js';
const router = express.Router();
router.post('/', uploadMiddleware.single("myfile"), createStorage);
export default router;