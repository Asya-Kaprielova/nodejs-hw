import { Schema } from 'mongoose';
import { model } from 'mongoose';

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
  },
  tag: {
    type: String,
    trim: true,
    required: false,
    enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'],
    default: 'Todo'
  },

},
{
    timestamps: true,
    versionKey: false,
  });

export const Note = model('Notes', noteSchema);
