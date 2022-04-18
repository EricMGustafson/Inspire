
export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.user = this.user
  }

  get ToDoTemplate() {
    return `
    <div class="d-flex justify-content-between" id="${this.id}">
      <div onclick="app.toDosController.editToDo('${this.id}')">
        <input type="checkbox" ${this.completed ? 'checked' : ''} class="form-check-input" name="todos">
        <label class="form-check-label ${this.completed ? 'st' : ''}" for="todos">${this.description}</label>
      </div>
      <div>
        <i class="mdi mdi-delete selectable" onclick="app.toDosController.deleteToDo('${this.id}', '${this.description}')"></i>
      </div>
    </div>`
  }
}