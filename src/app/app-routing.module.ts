import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { LoginGuard } from './guards/login.guard';
import { LogoutComponent } from './logout/logout.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { StudentAddHttpComponent } from './student/student-add-http/student-add-http.component';
import { StudentEditHttpComponent } from './student/student-edit-http/student-edit-http.component';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  
  // {path: '', component: TodoListComponent},
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'display', component: DisplayComponent, canActivate: [LoginGuard] },
  {path: 'counter', component: CounterComponent, canActivate: [LoginGuard] },
  {path: 'colors', component: ColorsComponent, canActivate: [LoginGuard] },
  {path: 'todo', component: TodoListComponent, canActivate: [LoginGuard] },
  {path: 'student-list', component: StudentListComponent, canActivate: [LoginGuard] },
  {path: 'student-list-http', component: StudentListHttpComponent, canActivate: [LoginGuard] },
  {path: 'student-add-http', component: StudentAddHttpComponent, canActivate: [LoginGuard] },
  {path: 'student-edit-http/:sid', component: StudentEditHttpComponent, canActivate: [LoginGuard] },
  {path: 'student-view/:sid', component: StudentViewComponent, canActivate: [LoginGuard] },  // http://localhost:5555/student-view/102
  {path: 'weather', component: WeatherComponent, canActivate: [LoginGuard] },
  {path: '**', component: RouteNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
