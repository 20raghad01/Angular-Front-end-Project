import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private baseUrl =  'https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/status/status';

  constructor(private http:HttpClient) { }

  showData(){
    return this.http.get(`${this.baseUrl}`);
  }
}
