import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GetbooksService {
  private baseUrl = "http://localhost:3000/api/books/";

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(`${this.baseUrl}`);
  }

  getbookById(id: number): Observable<any> {
    console.log();
    
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
