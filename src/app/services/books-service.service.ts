import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  constructor(private http:HttpClient) {

   }
   getbooks(){
    return this.http.get('https://dummyjson.com/products');
   }
   deletebook(bookid:number){
    return this.http.delete(`https://dummyjson.com/products/${bookid}`)
   }
   addbook(object:any){
    return this.http.post('https://dummyjson.com/products/add',object)
   }
   getOneBook(bookid:number){
    return this.http.get(`https://dummyjson.com/products/${bookid}`)
   }
   EditBook(Data:any,bookid:number){
    return this.http.put(`https://dummyjson.com/products/${bookid}`,Data)
   }
}
