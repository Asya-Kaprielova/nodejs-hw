import { Note } from '../models/notes.js';
import createHttpError from 'http-errors';

export const getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
};

export const getNoteById = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findById(id);
  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(note);
};

export const createNote = async (req, res) => {
const Note = await Note.create(req.body);
  res.status(201).json(Note);
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findByIdAndDelete(id);
  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json({ message: 'Note deleted successfully' });
};

export const updateNote = async (req, res) => {
  const { Noteid } = req.params;
  const Note = await Note.findByIdAndUpdate({ _id: Noteid }, req.body, { returnDocument: "after" });
  if (!Note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(Note);
};
