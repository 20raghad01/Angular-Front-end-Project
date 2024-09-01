import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthorServiceService {
  constructor(private http: HttpClient) {}
  getAuthors(): Observable<any>  {
    return this.http.get("https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/authors");
  }
  deleteAuthor(userid: number): Observable<any>  {
    return this.http.delete(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/authors/${userid}`);
  }
  addAuthor(object: any): Observable<any>  {
    return this.http.post("https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/authors/", object);
  }
  getOneAuthor(userid: number): Observable<any>  {
    return this.http.get(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/authors/${userid}`);
  }
  EditAuthor(Data: any, userid: number): Observable<any>  {
    return this.http.put(`https://bookstore-api-raghads-projects-28484bdc.vercel.app/api/authors/${userid}`, Data);
  }
}
