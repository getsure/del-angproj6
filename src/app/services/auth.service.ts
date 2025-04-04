import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated:boolean = false;
  dbUsers= [
    {"username":"admin", "password":"admin"},
    {"username":"chiru", "password":"chiru"}
  ]
  constructor(private router:Router){}

  login(inputUserName:string, inputPassword:string){
    if(this.dbUsers.find((user)=> user.username === inputUserName && user.password === inputPassword)){
      this.router.navigate(['/books'])
      this.isAuthenticated = true;
    }
    else{
      alert('You are not authenticated user')
      this.isAuthenticated = false;
      this.router.navigate(['/login'])
    }
  }
  logout(){
    this.isAuthenticated = false;
    return this.router.navigate(['/login'])
  }
  isAuthenticatedUser():boolean{
    return this.isAuthenticated
  }

}
