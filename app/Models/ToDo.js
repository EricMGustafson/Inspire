
export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.user = this.user
  }

  get ToDoTemplate() {
    return `
    <div id="${this.id}">
    <input type="checkbox" onclick="app.toDosController.editToDo('${this.id}')" ${this.completed ? 'checked' : ''} class="form-check-input" name="todos" id="todos">
    <label class="form-check-label" for="todos">
      ${this.description}
    </label>
  </div>`
  }
}