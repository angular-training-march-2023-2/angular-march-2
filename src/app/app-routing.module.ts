import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  
  // {path: '', component: TodoListComponent},
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
  {path: 'display', component: DisplayComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'colors', component: ColorsComponent},
  {path: 'todo', component: TodoListComponent},
  {path: 'student-list', component: StudentListComponent},
  {path: 'student-list-http', component: StudentListHttpComponent},
  {path: 'student-view/:sid', component: StudentViewComponent},  // http://localhost:5555/student-view/102
  {path: 'weather', component: WeatherComponent},
  {path: '**', component: RouteNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
