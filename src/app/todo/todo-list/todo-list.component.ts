import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  allToDo: string[] = ["Fill Gas", "Call Accountant", "Laundry"];

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo(todo: string){
    this.allToDo.splice(this.allToDo.indexOf(todo), 1);
  }
}
