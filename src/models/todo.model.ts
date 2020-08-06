import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema(
  {
    title: String,
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

const Todo = mongoose.model('Todos', TodoSchema, 'todos')

export default Todo
