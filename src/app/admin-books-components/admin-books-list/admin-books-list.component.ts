import { Component } from '@angular/core';
import { AdminBooksFormComponent } from '../admin-books-form/admin-books-form.component';
import { BooksServiceService } from '../../services/books-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-books-list',
  standalone: true,
  imports: [AdminBooksFormComponent,CommonModule],
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
    this.books.deletebook(bookid).subscribe(
      (response) => {
        console.log('Book deleted:', response);
        
      }
      
    );
  }
  EditBook(Bid:number){
    this.router.navigate(['/edit',Bid])

  } 

}
