import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoriesServiceService {
  constructor(private http: HttpClient) {}
  getCategories(): Observable<any>  {
    return this.http.get("https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/categories");
  }
  deleteCategory(categoryid: number): Observable<any>  {
    return this.http.delete(
      `https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/categories/${categoryid}`
    );
  }
  addCategory(categoryid: any): Observable<any>  {
    return this.http.post(
      "https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/categories",
      categoryid
    );
  }
  getOneCategory(categoryid: number): Observable<any>  {
    return this.http.get(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/categories/${categoryid}`);
  }
  EditCategory(Data: any, categoryid: number): Observable<any>  {
    return this.http.put(
      `https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/categories/${categoryid}`,
      Data
    );
  }
}
