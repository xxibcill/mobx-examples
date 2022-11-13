import { makeObservable, observable, action } from 'mobx'

interface Todo {
  header: string
  details: string
  isDone: boolean
}

class TodoStore {
  todolist: Todo[] = []

  constructor() {
    makeObservable(this, {
      todolist: observable,
      appendTodo: action,
    })
  }

  appendTodo(todo: Todo) {
    this.todolist.push(todo)
  }
}

export const todoStore = new TodoStore()
