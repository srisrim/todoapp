import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoServiceService {
  constructor() {}

  todos = [];
  todos$ = new Subject<any>();

  completedTodos = [];
  completedTodos$ = new Subject<any>();

  selectedTodos = [];
  selectedTodos$ = new Subject<any>();

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.selectedTodos = this.selectedTodos.filter(todo => todo.ischecked === false);
  }

  todoCompleted(todo) {
    let currentTask = todo;
    debugger;
    currentTask.completed == false
      ? (currentTask.completed = !currentTask.completed)
      : currentTask.completed;

    currentTask.ischecked == true
      ? (currentTask.ischecked = !currentTask.ischecked)
      : currentTask.ischecked;

    this.completedTodos.push(currentTask);
    this.removeTodo(currentTask);
  }

  repeatTodo(todo) {
    let currentTask = todo;
    currentTask.completed == true
      ? (currentTask.completed = !currentTask.completed)
      : (currentTask.completed = currentTask.completed);
    if (currentTask.ischecked == true) {
      currentTask.ischecked = !currentTask.ischecked;
    } else {
      currentTask.ischecked = currentTask.ischecked;
    }
    this.todos.push(currentTask);
    this.removeCompleted(currentTask);
  }

  removeCompleted(todo) {
    this.completedTodos.splice(this.completedTodos.indexOf(todo), 1);
    if (this.selectedTodos.includes(todo)) {
      this.selectedTodos.splice(this.selectedTodos.indexOf(todo), 1);
    }
  }

  selectTodo(todo) {
    let selected = todo;
    selected.ischecked = !selected.ischecked;
    if (selected.ischecked === true) {
      this.selectedTodos.push(selected);
      this.selectedTodos$.next(this.selectedTodos);
    } else {
      this.selectedTodos = this.selectedTodos.filter(todo => todo.ischecked === true);
      console.log(this.selectedTodos);
      this.selectedTodos$.next(this.selectedTodos);
    }
  }

  deleteSelectedTodos() {
    debugger;
    this.todos = this.todos.filter(todo => todo.ischecked === false);
    this.completedTodos = this.completedTodos.filter(
      todo => todo.ischecked === false
    );
    this.selectedTodos = this.selectedTodos.filter(
      todo => todo.ischecked === false
    );
    this.todos$.next(this.todos);
    this.completedTodos$.next(this.completedTodos);
    this.selectedTodos$.next(this.selectedTodos);
  }
}
