import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GetbooksService {
  private baseUrl = "https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books/";

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(`${this.baseUrl}`);
  }

  getbookById(id: number): Observable<any> {
    return this.http.get(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books/${id}`);
  }
}
