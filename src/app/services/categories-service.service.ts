import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CategoriesServiceService {
  constructor(private http: HttpClient) {}
  getCategories() {
    return this.http.get("http://localhost:3000/api/categories");
  }
  deleteCategory(categoryid: number) {
    return this.http.delete(
      `http://localhost:3000/api/categories/${categoryid}`
    );
  }
  addCategory(categoryid: any) {
    return this.http.post(
      "http://localhost:3000/api/categories",
      categoryid
    );
  }
  getOneCategory(categoryid: number) {
    return this.http.get(`http://localhost:3000/api/categories/${categoryid}`);
  }
  EditCategory(Data: any, categoryid: number) {
    return this.http.put(
      `http://localhost:3000/api/categories/${categoryid}`,
      Data
    );
  }
}
