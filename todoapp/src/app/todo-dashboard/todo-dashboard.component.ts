import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TodoServiceService } from "../todo-service.service";
import { AsyncSubject, BehaviorSubject, from, ReplaySubject, Subject } from "rxjs";
import { filter, map } from 'rxjs/operators';

@Component({
  selector: "app-todo-dashboard",
  templateUrl: "./todo-dashboard.component.html",
  styleUrls: ["./todo-dashboard.component.scss"],
})
export class TodoDashboardComponent implements OnInit {
  constructor(private _todoService: TodoServiceService) {}

  @Input() inputValue = "I am a child";
  @Input() count = 0;

  @Output() changeCount = new EventEmitter();

  messageToSendP = "adasdsdasdasdasd";

  receivedChildMessage: string;

  subject = new Subject();
  beSubject = new BehaviorSubject("Initial Value of subject");
  replySubject = new ReplaySubject(3, 200);
  asyncSubject = new AsyncSubject();

  task: string = "";
  message: string;
  error: boolean;
  todos = [];
  selectedTodos = [];

  products = [];

  countChanged() {
    this.count = this.count + 1;
    this.changeCount.emit(this.count);
  }

  ngOnInit() {
    this.products = this.getProducts();

    this.error = false;
    this.todos = this._todoService.todos;
    this.selectedTodos = this._todoService.selectedTodos;
    this._todoService.todos$.subscribe((todo) => {
      this.todos = todo;
    });
    this._todoService.selectedTodos$.subscribe((todo) => {
      this.selectedTodos = todo;
    });

    /**
     * Subject
     * No initial values. Receives recently emitted value to the next observers
     *

    let obs1 = this.subject.subscribe(x => this.addItem('Observer 1 : ' + x));

    this.subject.next("First Subject Executed");
    this.subject.next("Second Subject Executed");

    let obs2 = this.subject.subscribe(x => this.addItem('Observer 2 : ' + x));

    this.subject.next("Third Subject Executed");

    obs2.unsubscribe();

    this.subject.next("Subject unsubscribed");*/

    /**BehaviourSubject
     * Containes initial values. Receives recently emitted value to the next observers.
     *


     let obs1 = this.beSubject.subscribe(y => this.addItem('Observer 1 : ' + y));

     this.beSubject.next("First behavior subject");
     this.beSubject.next("Second behavior subject");
     this.beSubject.next("Third behavior subject");

     let obs2 = this.beSubject.subscribe(y => this.addItem('Observer 2 : ' + y));

     this.beSubject.next("Fourth behavior subject"); */

    /**
     * ReplySubject:
     * It's like BehaviorSubject, except it allows you to specify a buffer,
     * or number of emitted values to dispatch to observers.
     * lets say if number is 2 and u have 3 messages in stream, it emmits the last 2 msgs to the next observer.
     */

    //  let obs1 = this.replySubject.subscribe(z => this.addItem('Observer 1 : ' + z));

    //  this.replySubject.next("Second subject");
    //  this.replySubject.next("First subject");
    //  this.replySubject.next("Third subject");

    // let i = 1;
    // let interval = setInterval(() => this.replySubject.next(i++), 100);

    //  setTimeout(() => {
    //   let obs2 = this.replySubject.subscribe(z => this.addItem('Observer 2 : ' + z));
    //   clearInterval(interval);
    //  }, 500);

    //  this.replySubject.next("Fourth subject");

    /**
     * We're saying return the last 30 emitted values (events) ...within 200 milliseconds of a new subscription.
     * Then, we're using setInterval() to call .next() to dispatch a new event every 100 milliseconds.
     * Then, we create our second observer after 500 milliseconds.
     *
     * If we try changing the window time on line 3 from 200 to 500,
     * Observer 2 will receive all 5 emitted values,
     * because they occurred within 500 milliseconds.
     */

    /**
     * AsyncSubject
     * It emits the very last value, and will only do so once .complete() has been called on the subject.
     * */

    // let obs1 = this.asyncSubject.subscribe(x => this.addItem('Observer 1 : ' + x));

    // this.asyncSubject.next("Async Subject Executed");

    // this.asyncSubject.complete();

    // let obs2 = this.asyncSubject.subscribe(x => this.addItem('Observer 2 : ' + x));

    // this.asyncSubject.next("Async 2 Subject cannot be executed as its not completed");
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this._todoService.sub$.subscribe((res) => {
      console.log(res);
    });
    if (this.task.trim() != "" && this.task != undefined) {
      this.displayError("", false, 0);
      this._todoService.todos.push({
        completed: false,
        ischecked: false,
        todo: form.value,
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

  addItem(val: any) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
  }

  getProducts() {
    return [
      { id: "1", title: "screw driver", price: 100, stock: 11 },
      { id: "2", title: "screw", price: 150, stock: 5 },
      { id: "3", title: "spanner", price: 120, stock: 1 },
      { id: "4", title: "vaccum cleaner", price: 10, stock: 20 },
      { id: "5", title: "needle", price: 110, stock: 2 },
    ];
  }

  updateStock(stock) {
    console.log(stock);
    const newStock = parseInt(stock.updatedStock);
    this.products
      .filter((p) => p.id === stock.id)
      .map((p) => (p.stock += newStock));
  }

  onChangeCount(count) {
    console.log(count);
  }
}
