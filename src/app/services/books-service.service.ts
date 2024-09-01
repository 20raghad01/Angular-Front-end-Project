import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BooksServiceService {
  constructor(private http: HttpClient) {}
  getbooks(): Observable<any>  {
    return this.http.get("https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books");
  }
  deletebook(bookid: number): Observable<any>  {
    return this.http.delete(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books/${bookid}`);
  }
  addbook(object: any): Observable<any>  {
    return this.http.post("https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books", object);
  }
  getOneBook(bookid: number): Observable<any>  {
    return this.http.get(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books/${bookid}`);
  }
  EditBook(Data: any, bookid: number): Observable<any>  {
    return this.http.put(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/books/${bookid}`, Data);
  }
}
