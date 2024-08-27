import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthorServiceService {
  constructor(private http: HttpClient) {}
  getAuthors() {
    return this.http.get("http://localhost:3000/api/authors");
  }
  deleteAuthor(userid: number) {
    return this.http.delete(`http://localhost:3000/api/authors/${userid}`);
  }
  addAuthor(object: any) {
    return this.http.post("http://localhost:3000/api/authors/", object);
  }
  getOneAuthor(userid: number) {
    return this.http.get(`http://localhost:3000/api/authors/${userid}`);
  }
  EditAuthor(Data: any, userid: number) {
    return this.http.put(`http://localhost:3000/api/authors/${userid}`, Data);
  }
}
