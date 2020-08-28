import { Document } from 'mongoose';

interface ITodo extends Document {
  id: number,
  title: string,
  description: string,
  status: number
}

export default ITodo