import { Router } from 'express';
import { getAllNotes, getNoteById, createNote, deleteNote, updateNote } from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:id', getNoteById);
router.post('/notes', createNote);
router.delete('/notes/:id', deleteNote);
router.patch('/notes/:id', updateNote);

export default router;
