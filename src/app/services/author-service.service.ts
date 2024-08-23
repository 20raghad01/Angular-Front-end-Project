import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  constructor(private http:HttpClient) {


  }
  getAuthors(){
   return this.http.get('https://dummyjson.com/users');
  }
  deleteAuthor(userid:number){
    return this.http.delete(`https://dummyjson.com/users/${userid}`)
   }
   addAuthor(object:any){
    return this.http.post('https://dummyjson.com/users/add',object)
   }
   getOneAuthor(userid:number){
    return this.http.get(`https://dummyjson.com/users/${userid}`)
   }
   EditAuthor(Data:any,userid:number){
    return this.http.put(`https://dummyjson.com/users/${userid}`,Data)
   }
}
