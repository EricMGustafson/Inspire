import { ProxyState } from "../AppState.js"
import { toDosServices } from "../Services/ToDosServices.js"
import { Pop } from "../Utils/Pop.js"

function _drawToDos(){
  let template = ''
  ProxyState.todos.forEach(t => template += t.ToDoTemplate)
  document.getElementById('todosList').innerHTML = template
  // @ts-ignore
  bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('offcanvasRight')).show()

}

function _drawCount(){
  let unchecked = ProxyState.todos.filter(t => t.completed == true)
  console.log('unchecked boxes', unchecked);
  document.getElementById('unchecked').innerText = unchecked.length.toString()
  document.getElementById('total').innerText = ProxyState.todos.length.toString()
}

export class ToDosController{
  constructor() {
    this.getToDos()
    ProxyState.on('todos', _drawToDos)
    ProxyState.on('todos', _drawCount)
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
      /**@type {HTMLFormElement} */
      // @ts-ignore
      const formElem = window.event.target
      const formData = {
        description: formElem.description.value
      }
      await toDosServices.addToDo(formData)
      formElem.reset()
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
  async deleteToDo(id, todo){
    if(await Pop.confirm('Delete ToDo?', 'This will delete ' + todo + '.', 'warning'))
    try {
      await toDosServices.deleteToDo(id)
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error')
    }
  }
}