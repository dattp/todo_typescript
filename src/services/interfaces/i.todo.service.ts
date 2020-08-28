import ITodo from "../../types/interfaces/i.todo.type";

interface ITodoService {
  getListTodo(): Promise<ITodo[]>
  getTodo(id: number): Promise<ITodo | null>
  insert(todo: any): Promise<ITodo>
}

export = ITodoService