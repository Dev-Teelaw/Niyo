import { Schema, model } from 'mongoose';

const todoTaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  deadline:{
    type: Date
  }
}, {timestamps: true});

export const TodoTask = model('TodoTask', todoTaskSchema);
