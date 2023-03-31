import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserHttpService } from '../services/user-http.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  errorMessage: string = '';
  allUsers: User[] = [];
  constructor(private userHttpService: UserHttpService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(myForm: NgForm){
    this.userHttpService.fetchAllUsers().subscribe({
      next: (response)=>{
        this.allUsers = response;
        let filteredUser = this.allUsers.filter((eachUser)=> eachUser.uName==myForm.value.uName && eachUser.uPassword==myForm.value.uPassword);
        if(filteredUser.length==0){
          // this means username password does not match
          // login has failed
          this.errorMessage = "Invalid Username/Password!";

        }else{
          // username password has matched
          // login is succesful
          // if login is successfull let us navigate to student-list-http

          this.authService.isLoggedIn=true; // setting this to true because a user has logged in
          this.authService.storeUserInfo(filteredUser[0]); // sending the user-info to auth service to be stored in sessionStorage
          this.router.navigate(['student-list-http']);
        }
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
