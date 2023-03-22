import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-item-child',
  templateUrl: './todo-item-child.component.html',
  styleUrls: ['./todo-item-child.component.css']
})
export class TodoItemChildComponent implements OnInit, OnChanges, DoCheck {

  @Input() receivedTodo: string = '';
  @Output() deleteEvent = new EventEmitter(); // this EventEmitter object is created to emit the event to the parent component

  constructor() {
    console.log("constructor called...");
   }

  ngOnInit(): void {
    console.log("ngOnInit called...");
  }

  ngOnChanges(change: SimpleChanges): void{
    console.log('ngOnChanges called...');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called...');
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called...");
  }

  removeTodoChild(todo: string){
    // here we will not handle the removal of todo from array because we dont have the array here
    // it is appropiate the parent component to handle this event
    // so the child component should emit the event to the parent component
    // this is dont with the event emitter
    this.deleteEvent.emit(todo); // this linbe will emit the event ot parent component 
                                  // while doing so the todo is passed to the parent
  }
}
