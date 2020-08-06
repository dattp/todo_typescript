import { Todo } from "../../entities/todo.entity";
import ITodo from "../../entities/interfaces/i.todo.entity";

interface ITodoService {
  getListTodo(): Promise<ITodo[]>
  getTodo(id: number): Promise<ITodo | null>
  insert(todo: ITodo): Promise<ITodo | null>
}

export = ITodoService 