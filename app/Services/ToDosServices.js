import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { sandboxApi } from "./AxiosServices.js"

class ToDosServices {

  async getTodos() {
    const res = await sandboxApi.get('eric/todos')
    ProxyState.todos = res.data.map(t => new ToDo(t))
    ProxyState.todos = ProxyState.todos
  }
async addToDo(formData) {
  const res = await sandboxApi.post('eric/todos', formData)
  ProxyState.todos = [...ProxyState.todos, new ToDo(res.data)]
}
async editToDo(id) {
  let checkValue = ProxyState.todos.find(t => t.id == id)
  checkValue.completed = !checkValue.completed
  let res = await sandboxApi.put('eric/todos/' + id, checkValue)
  let index = ProxyState.todos.findIndex(t => t.id == res.data.id)
  ProxyState.todos.splice(index, 1, checkValue)
  ProxyState.todos = ProxyState.todos
}
async deleteToDo(id) {
  await sandboxApi.delete('eric/todos/' + id)
  const index = ProxyState.todos.findIndex(t => t.id == id)
  ProxyState.todos.splice(index, 1)
  ProxyState.todos = ProxyState.todos
}
}

export const toDosServices = new ToDosServices()