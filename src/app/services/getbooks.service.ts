import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetbooksService {
  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get(`${this.baseUrl}`)
  }

  getProductById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}
