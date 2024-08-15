import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NavbarComponent, NgxPaginationModule, CommonModule, FooterComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {
  categoryArray: Array<any> = [
        {
          "id":	1,
          "img":	"assets/imgs/book.jpg",
          "bookName":	"Harry Potter",
          "bookAuthor":	"J. K. Rowling",
        },
        {
          "id":	2,
          "img":	"assets/imgs/book.jpg",
          "bookName":	"Harry Potter",
          "bookAuthor":	"J. K. Rowling",
        },
        {
          "id":	3,
          "img":	"assets/imgs/book.jpg",
          "bookName":	"Harry Potter",
          "bookAuthor":	"J. K. Rowling",
        },
        {
          "id":	4,
          "img":	"assets/imgs/book.jpg",
          "bookName":	"Harry Potter",
          "bookAuthor":	"J. K. Rowling",
        },
        {
          "id":	5,
          "img":	"assets/imgs/book.jpg",
          "bookName":	"Harry Potter",
          "bookAuthor":	"J. K. Rowling",
        },
        {
          "id":	6,
          "img":	"assets/imgs/book.jpg",
          "bookName":	"Harry Potter",
          "bookAuthor":	"J. K. Rowling",
        },
        {
          "id":	7,
          "img":	"assets/imgs/book.jpg",
          "bookName":	"Harry Potter",
          "bookAuthor":	"J. K. Rowling",
        },
        {
          "id":	8,
          "img":	"assets/imgs/book.jpg",
          "bookName":	"Harry Potter",
          "bookAuthor":	"J. K. Rowling",
        },
        {
          "id":	5,
          "img":	"assets/imgs/.jpg",
          "bookName":	"Harry Potter",
          "bookAuthor":	"J. K. Rowling",
        },
        {
          "id":	6,
          "img":	"assets/imgs/book.jpg",
          "bookName":	"Harry Potter",
          "bookAuthor":	"J. K. Rowling",
        },
        {
          "id":	7,
          "img":	"assets/imgs/book.jpg",
          "bookName":	"Harry ",
          "bookAuthor":	"J. K. Rowling",
        },
        {
          "id":	8,
          "img":	"assets/imgs/book.jpg",
          "bookName":	"Harry Potter",
          "bookAuthor":	"J. K. ",
        }
  ]
  p: number = 1;

  constructor(private router:Router){}

  singlebook(productId: number){
    this.router.navigate(['/singleBook', productId])
  }

  author(Id: number){
    this.router.navigate(['/author', Id])
  }
}
