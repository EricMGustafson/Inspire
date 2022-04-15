import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { sandboxApi } from "./AxiosServices.js"

class ToDosServices {

  async getTodos() {
    const res = await sandboxApi.get('eric/todos')
    console.log('get todos', res.data);
    ProxyState.todos = res.data.map(t => new ToDo(t))
    ProxyState.todos = ProxyState.todos
    console.log('proxy arr', ProxyState.todos)
  }
async addToDo(formData) {
  const res = await sandboxApi.post('eric/todos', formData)
  console.log('Add ToDo', res);
}
async editToDo(id) {
  let checkValue = ProxyState.todos.find(t => t.id == id)
  console.log('checkvalue', checkValue);
  checkValue.completed = !checkValue.completed
  let res = await sandboxApi.put('eric/todos/' + id, checkValue)
  let index = ProxyState.todos.findIndex(t => t.id == res.data.id)
  ProxyState.todos.splice(index, 1, checkValue)
}
async deleteToDo(id) {
  await sandboxApi.delete('eric/todos' + id)
  const index = ProxyState.todos.findIndex(t => t.id == id)
  ProxyState.todos.splice(index, 1)
}
}





export const toDosServices = new ToDosServices()