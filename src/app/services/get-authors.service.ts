import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GetAuthorsService {
  private baseUrl = "https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/authors";

  constructor(private http: HttpClient) {}

  getauthors() {
    return this.http.get(`${this.baseUrl}`);
  }

  getauthourById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
