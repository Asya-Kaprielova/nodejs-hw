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
  userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

},
{
    timestamps: true,
    versionKey: false,
  });

  noteSchema.index({userId: 1, tag: 1, createdAt: -1});

export const Note = model('Note', noteSchema);
