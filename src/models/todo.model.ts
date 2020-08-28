import mongoose from 'mongoose';

import ITodo from '../types/interfaces/i.todo.type';

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true
    },
    description: String,
    status: { type: Number, default: 0 }
  },
  { versionKey: false }
);

TodoSchema.set('toJSON', {
  transform: function (doc: any, ret: any, options: any) {
    ret.id = ret._id;
    delete ret._id;
  }
});

const Todo = mongoose.model<ITodo>('Todos', TodoSchema, 'todos')

export default Todo
