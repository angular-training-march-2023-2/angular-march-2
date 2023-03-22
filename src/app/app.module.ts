import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ToggleMessageComponent } from './toggle-message/toggle-message.component';
import { ColorsComponent } from './colors/colors.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemChildComponent } from './todo/todo-list/todo-item-child/todo-item-child.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CounterComponent,
    ToggleMessageComponent,
    ColorsComponent,
    StudentListComponent,
    TodoListComponent,
    TodoItemChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
