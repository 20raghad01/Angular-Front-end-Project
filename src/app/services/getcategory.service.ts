import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GetcategoryService {
  private baseUrl = "https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/categories";

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${this.baseUrl}`);
  }

  getCategoryById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
