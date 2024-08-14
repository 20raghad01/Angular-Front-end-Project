import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  constructor(private http:HttpClient) {


  }
  getCategories(){
   return this.http.get('https://dummyjson.com/products/categories');
  }
  deleteCategory(bookid:number){
   return this.http.delete(`https://dummyjson.com/products/${bookid}`)
  }
  addCategory(object:any){
   return this.http.post('https://dummyjson.com/products/add',object)
  }
  getOneCategory(bookid:number){
   return this.http.get(`https://dummyjson.com/products/${bookid}`)
  }
  EditCategory(Data:any,bookid:number){
   return this.http.put(`https://dummyjson.com/products/${bookid}`,Data)
  }
}
