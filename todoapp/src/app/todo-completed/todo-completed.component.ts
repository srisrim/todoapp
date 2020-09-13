import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TodoServiceService } from "../todo-service.service";

@Component({
  selector: "app-todo-completed",
  templateUrl: "./todo-completed.component.html",
  styleUrls: ["./todo-completed.component.scss"]
})
export class TodoCompletedComponent implements OnInit {
  @Input() receivedParentMessage: string;

  @Output() messageToEmit = new EventEmitter<string>();

  completedTodos = [];

  constructor(private _todoService: TodoServiceService) {}

  ngOnInit() {
    this.completedTodos = this._todoService.completedTodos;
    this._todoService.completedTodos$.subscribe(completedTodo => {
      this.completedTodos = completedTodo;
    });
  }

  selectedTodos = this._todoService.selectedTodos;

  onClickRepeatTodo(todo) {
    this._todoService.repeatTodo(todo);
  }

  onClickRemoveCompleted(todo) {
    this._todoService.removeCompleted(todo);
  }

  onChangeCheckbox(todo) {
    this._todoService.selectTodo(todo);
  }

  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message);
  }
}
