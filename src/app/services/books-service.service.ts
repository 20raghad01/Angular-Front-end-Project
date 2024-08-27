import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BooksServiceService {
  constructor(private http: HttpClient) {}
  getbooks() {
    return this.http.get("http://localhost:3000/api/books");
  }
  deletebook(bookid: number) {
    return this.http.delete(`http://localhost:3000/api/books/${bookid}`);
  }
  addbook(object: any) {
    return this.http.post("http://localhost:3000/api/books", object);
  }
  getOneBook(bookid: number) {
    return this.http.get(`http://localhost:3000/api/books/${bookid}`);
  }
  EditBook(Data: any, bookid: number) {
    return this.http.put(`http://localhost:3000/api/books/${bookid}`, Data);
  }
}
