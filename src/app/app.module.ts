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
import { HoverHighlightDirective } from './custom-directives/hover-highlight.directive';
import { NumberDisplayComponent } from './number-display/number-display.component';
import { ExpoPipe } from './custom-pipes/expo.pipe';
import { FilterListPipe } from './custom-pipes/filter-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CounterComponent,
    ToggleMessageComponent,
    ColorsComponent,
    StudentListComponent,
    TodoListComponent,
    TodoItemChildComponent,
    HoverHighlightDirective,
    NumberDisplayComponent,
    ExpoPipe,
    FilterListPipe,
   
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
