import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private baseUrl =  'https://dummyjson.com/products';

  constructor(private http:HttpClient) { }

  showData(){
    return this.http.get(`${this.baseUrl}`);
  }
}
