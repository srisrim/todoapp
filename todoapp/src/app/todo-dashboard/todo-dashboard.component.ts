import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TodoServiceService } from "../todo-service.service";

@Component({
  selector: "app-todo-dashboard",
  templateUrl: "./todo-dashboard.component.html",
  styleUrls: ["./todo-dashboard.component.scss"]
})
export class TodoDashboardComponent implements OnInit {
  constructor(private _todoService: TodoServiceService) {}

  messageToSendP: string = "adasdsdasdasdasd";

  receivedChildMessage: string;

  task: string = "";
  message: string;
  error: boolean;
  todos = [];
  selectedTodos = [];

  ngOnInit() {
    this.error = false;
    this.todos = this._todoService.todos;
    this.selectedTodos = this._todoService.selectedTodos;
    this._todoService.todos$.subscribe(todo => {
      this.todos = todo;
    });
    this._todoService.selectedTodos$.subscribe(todo => {
      this.selectedTodos = todo;
    })
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (this.task.trim() != "" && this.task != undefined) {
      this.displayError("", false, 0);
      this._todoService.todos.push({
        completed: false,
        ischecked: false,
        todo: form.value
      });
      this.task = "";
    } else {
      this.displayError("Please enter a task", true, 5000);
    }
  }

  displayError(msg: string, isError: boolean, delay: number) {
    this.message = msg;
    this.error = isError;
    setTimeout(() => {
      this.error = false;
    }, delay);
  }

  onCompleted(todo) {
    this._todoService.todoCompleted(todo);
  }

  onClickRemoveTodo(todo) {
    this._todoService.removeTodo(todo);
  }

  onChangeCheckbox(todo) {
    this._todoService.selectTodo(todo);
  }

  onClickDeleteAllSelected() {
    this._todoService.deleteSelectedTodos();
  }

  getMessage(messsage: string) {
    this.receivedChildMessage = messsage;
  }
}
