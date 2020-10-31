import ITodoController from '../controllers/interfaces/i.todo.controller'

class TodoRoute {

  private app: any
  private todoController: ITodoController

  constructor(app: any, controller: ITodoController) {
    this.app = app
    this.todoController = controller
    this.routes()
  }

  private routes() {
    this.app.get('/api/todos', this.todoController.getTodos)
    this.app.get('/api/todo/:id', this.todoController.getTodoDetail)
    this.app.post('/api/todo', this.todoController.insertTodo)
  }
}

export { TodoRoute }