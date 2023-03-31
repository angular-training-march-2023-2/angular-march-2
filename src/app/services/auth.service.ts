import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { User } from '../user-login/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // the purpose of this service is
  //1. to store the user info in sessionStorage once a user has logged in
  //2. to remove the user info from sessionStorage once a user has logged out
  //3. to fetch the user info from sessionStorage if a user has logged in
  //4. to keep track of whether a user has logged in or not(with the help of a boolean variable)

  isLoggedIn: boolean = false;

  constructor() { }

  storeUserInfo(user: User): void{
    //JSON.stringify will convert javascript object to json string object
    sessionStorage.setItem("user-info", JSON.stringify(user));
  }

  removeUserInfo(): void{
    sessionStorage.removeItem("user-info");
  }
  
  fetchUserInfo(): User{
    let userInfo: User = {
      uName:'',
      uPassword:'',
      token:''
    }
    let userInfoJson = sessionStorage.getItem("user-info");
    if(userInfoJson!=null){
      userInfo=JSON.parse(userInfoJson);
    }
    return userInfo;
  }
}
