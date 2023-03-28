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
import { ProductListComponent } from './product/product-list/product-list.component';
import { LifecycleParentComponent } from './lifecycle-parent/lifecycle-parent.component';
import { LifecycleChildComponent } from './lifecycle-parent/lifecycle-child/lifecycle-child.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { HeaderComponent } from './header/header.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { StudentViewComponent } from './student/student-view/student-view.component';

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
    ProductListComponent,
    LifecycleParentComponent,
    LifecycleChildComponent,
    ObservableDemoComponent,
    WeatherComponent,
    StudentListHttpComponent,
    HeaderComponent,
    RouteNotFoundComponent,
    StudentViewComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
