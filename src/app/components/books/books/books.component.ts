import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";

import { TableModule } from 'primeng/table';

import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GetbooksService } from '../../../services/getbooks.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NavbarComponent, TableModule, NgxPaginationModule, CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})

export class BooksComponent {
  // prductsArray: Array<any> = [
  //     {
  //       "id":	1,
  //       "img":	"assets/imgs/book.jpg",
  //       "bookName":	"Harry Potter",
  //       "bookAuthor":	"J. K. Rowling",
  //     },
  //     {
  //       "id":	2,
  //       "img":	"assets/imgs/book.jpg",
  //       "bookName":	"Harry Potter",
  //       "bookAuthor":	"J. K. Rowling",
  //     },
  //     {
  //       "id":	3,
  //       "img":	"assets/imgs/book.jpg",
  //       "bookName":	"Harry Potter",
  //       "bookAuthor":	"J. K. Rowling",
  //     },
  //     {
  //       "id":	4,
  //       "img":	"assets/imgs/book.jpg",
  //       "bookName":	"Harry Potter",
  //       "bookAuthor":	"J. K. Rowling",
  //     },
  //     {
  //       "id":	5,
  //       "img":	"assets/imgs/book.jpg",
  //       "bookName":	"Harry Potter",
  //       "bookAuthor":	"J. K. Rowling",
  //     },
  //     {
  //       "id":	6,
  //       "img":	"assets/imgs/book.jpg",
  //       "bookName":	"Harry Potter",
  //       "bookAuthor":	"J. K. Rowling",
  //     },
  //     {
  //       "id":	7,
  //       "img":	"assets/imgs/book.jpg",
  //       "bookName":	"Harry Potter",
  //       "bookAuthor":	"J. K. Rowling",
  //     },
  //     {
  //       "id":	8,
  //       "img":	"assets/imgs/book.jpg",
  //       "bookName":	"Harry Potter",
  //       "bookAuthor":	"J. K. Rowling",
  //     },
  //     {
  //       "id":	5,
  //       "img":	"assets/imgs/.jpg",
  //       "bookName":	"Harry Potter",
  //       "bookAuthor":	"J. K. Rowling",
  //     },
  //     {
  //       "id":	6,
  //       "img":	"assets/imgs/book.jpg",
  //       "bookName":	"Harry Potter",
  //       "bookAuthor":	"J. K. Rowling",
  //     },
  //     {
  //       "id":	7,
  //       "img":	"assets/imgs/book.jpg",
  //       "bookName":	"Harry ",
  //       "bookAuthor":	"J. K. Rowling",
  //     },
  //     {
  //       "id":	8,
  //       "img":	"assets/imgs/book.jpg",
  //       "bookName":	"Harry Potter",
  //       "bookAuthor":	"J. K. ",
  //     }
  // ]

  // Paginator
  p: number = 1;

  // Dynamic
  productsArray!: Array<any>;

  constructor(private router:Router, private booksService: GetbooksService){
    booksService.getBooks().subscribe((response: any) =>{
      this.productsArray = response.products;
      console.log(this.productsArray)
      
    })
    
  }

  singlebook(productId: number){
    this.router.navigate(['/singleBook', productId])
  }
}
