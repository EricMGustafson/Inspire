import { ProxyState } from "../AppState.js"
import { toDosServices } from "../Services/ToDosServices.js"
import { Pop } from "../Utils/Pop.js"

function _drawToDos(){
  let template = ''
  ProxyState.todos.forEach(t => template += t.ToDoTemplate)
  document.getElementById('todosList').innerHTML = template

}

export class ToDosController{
  constructor() {
    ProxyState.on('todos', _drawToDos)
    this.getToDos()
  }

  async getToDos(){
    try {
      await toDosServices.getTodos()
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error')
    }
  }

  async addToDo(){
    try {
      window.event.preventDefault()
      const formElem = window.event.target
      const formData = {
        // @ts-ignore
        description: formElem.description.value
      }
      await toDosServices.addToDo(formData)
      console.log('form data', formData);
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error')
    }
  }
  async editToDo(id){
    try {
      await toDosServices.editToDo(id)
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error')
    }
  }
  async deleteToDo(id){
    try {
      await toDosServices.deleteToDo(id)
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error')
    }
  }
}