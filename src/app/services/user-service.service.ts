import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient, private router: Router) { }
  login(credentials: { username: string; password: string }):Observable<any>{
    return this.http.post('https://dummyjson.com/auth/login',credentials)
  }
  logout(): void {
    localStorage.removeItem('Usertoken');
    this.router.navigate(['/UserLogin']);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('Usertoken');
  }
  register(object:any){
    return this.http.post('https://dummyjson.com/users/add',object)
   }
   getOneUser(userid:number){
    return this.http.get(`https://dummyjson.com/users/${userid}`)
   }
}
