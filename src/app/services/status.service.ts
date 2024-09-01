import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private baseUrl =  'https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/status/status';

  constructor(private http:HttpClient) { }

  showData(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
