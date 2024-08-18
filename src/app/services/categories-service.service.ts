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
  deleteCategory(categoryid:number){
   return this.http.delete(`https://dummyjson.com/products/categories/${categoryid}`)
  }
  addCategory(categoryid:any){
   return this.http.post('https://dummyjson.com/products/categories/add',categoryid)
  }
  getOneCategory(categoryid:number){
   return this.http.get(`https://dummyjson.com/products/categories/${categoryid}`)
  }
  EditCategory(Data:any,categoryid:number){
   return this.http.put(`https://dummyjson.com/products/categories/${categoryid}`,Data)
  }
}
