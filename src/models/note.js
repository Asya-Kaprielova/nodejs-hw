import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    required: false,
    default: ''
  },
  tag: {
    type: String,
    trim: true,
    required: false,
    enum: TAGS,
    default: 'Todo'
  },

},
{
    timestamps: true,
    versionKey: false,
  });

  noteSchema.index({tag: 1, createdAt: -1});

export const Note = model('Note', noteSchema);
