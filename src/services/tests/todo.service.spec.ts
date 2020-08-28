import { TodoService } from '../todo.service'
import ITodo from '../../entities/interfaces/i.todo.entity'
describe('test Todo service', () => {

  let todoService: TodoService

  beforeAll(() => {
    todoService = new TodoService()
  })

  it('Should return todo list', async () => {
    const result = await todoService.getListTodo()
    expect.assertions(2)
    expect(Array.isArray(result)).toBe(true)
    expect(result).toHaveLength(3)
  })

  it('Should return a todo', async () => {
    const id = 2
    const result = await todoService.getTodo(id)
    expect.assertions(3)
    expect(typeof result).toBe('object')
    expect(result?.id).toEqual(id)
    expect(result?.title).toEqual('js')
  })

  it('Should return null - todo not found', async () => {
    const id = 20
    const result = await todoService.getTodo(id)
    expect.assertions(1)
    expect(result).toBeNull()
  })

  it('Should return todo inserted', async () => {
    const todo: ITodo = {
      id: 4,
      title: 'todo test',
      description: 'insert todo test',
      status: 0
    }

    const result = await todoService.insert(todo)
    expect.assertions(4)
    expect(typeof result).toBe('object')
    expect(result?.id).toEqual(todo.id)
    expect(result?.title).toEqual(todo.title)
    expect(result?.description).toEqual(todo.description)
  })
})
