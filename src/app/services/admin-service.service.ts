import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient, private router: Router) { }
  login(credentials: { username: string; password: string }):Observable<any>{
    return this.http.post('http://localhost:3000/api/auth/login',credentials)
  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
