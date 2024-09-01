import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BooksServiceService {
  constructor(private http: HttpClient) {}
  getbooks() {
    return this.http.get("https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books");
  }
  deletebook(bookid: number) {
    return this.http.delete(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books/${bookid}`);
  }
  addbook(object: any) {
    return this.http.post("https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books", object);
  }
  getOneBook(bookid: number) {
    return this.http.get(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books/${bookid}`);
  }
  EditBook(Data: any, bookid: number) {
    return this.http.put(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books/${bookid}`, Data);
  }
}
