import express from 'express';
import {getAllNotes, getNoteById,CreateNote,updateNote,deleteNote} from '../controllers/notesController.js';

const router = express.Router();

router.get('/',getAllNotes);
router.get('/:id', getNoteById);
router.post('/',CreateNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote)

export default router;