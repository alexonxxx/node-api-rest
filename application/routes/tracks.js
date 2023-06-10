import express from 'express';
import { getItems, getItem, createItem, updateItem, deleteItem } from '../../infrastructure/controllers/tracks.js';
const router = express.Router();
router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);
export default router;