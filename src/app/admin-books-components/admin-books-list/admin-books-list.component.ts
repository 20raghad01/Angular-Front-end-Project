import { Component } from '@angular/core';
import { AdminBooksFormComponent } from '../admin-books-form/admin-books-form.component';
import { BooksServiceService } from '../../services/books-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AdminBooksEditFormComponent } from '../admin-books-edit-form/admin-books-edit-form.component';

@Component({
  selector: 'app-admin-books-list',
  standalone: true,
  imports: [AdminBooksFormComponent,CommonModule,AdminBooksEditFormComponent],
  templateUrl: './admin-books-list.component.html',
  styleUrl: './admin-books-list.component.css'
})
export class AdminBooksListComponent {
  BooksList:Array<any>=[];

  constructor(private books:BooksServiceService,private router:Router){
    
  }
  ngOnInit(){
    this.GetBooks();
  }
  GetBooks(){
    this.books.getbooks().subscribe((response:any)=>{
      this.BooksList=response.products
      console.log(response);
    })
  }
  DeleteBook(bookid:number){
    this.books.deletebook(bookid).subscribe((response) => {
        console.log('Book deleted:', response);
      }
      
    );
    this.GetBooks();
  }
  EditBook(Bid:number){
    this.router.navigate(['/AdminBooksEdit',Bid])

  } 

}
export interface BooksOBJ{
  id:number
  title:string;
  category:string;
  price:number;
  images:string;
  
  
}
