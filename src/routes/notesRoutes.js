import { Router } from 'express';
import { getAllNotes, getNoteById, createNote, deleteNote, updateNote } from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteid', getNoteById);
router.post('/notes', createNote);
router.delete('/notes/:noteid', deleteNote);
router.patch('/notes/:noteid', updateNote);

export default router;
