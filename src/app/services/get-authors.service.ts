import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAuthorsService {
  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http:HttpClient) { }

  getauthors(){
    return this.http.get(`${this.baseUrl}`)
  }

  getauthourById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}
