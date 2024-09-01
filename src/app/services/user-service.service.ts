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
    return this.http.post('https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/auth/login',credentials)
  }
  logout(): void {
    localStorage.removeItem('Usertoken');
    this.router.navigate(['/']);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('Usertoken');
  }
  register(object:any): Observable<any> {
    return this.http.post('https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/auth/register',object)
   }
   getOneUser(userid:number): Observable<any> {
    return this.http.get(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/auth/${userid}`)
   }
}
