import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksServiceService } from '../../services/books-service.service';

@Component({
  selector: 'app-admin-books-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admin-books-form.component.html',
  styleUrl: './admin-books-form.component.css'
})
export class AdminBooksFormComponent {
  addForm!:FormGroup;

  BooksList:Array<any>=[];
  constructor(private books:BooksServiceService ){
    this.addForm=new FormGroup({
      booktitle: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      bookimage: new FormControl('', Validators.required)
    })
    
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
  AddBook() {
    if (this.addForm.valid) {
      const formData = new FormData();
      formData.append('title', this.addForm.controls['booktitle'].value);
      formData.append('category', this.addForm.controls['category'].value);
      formData.append('price', this.addForm.controls['author'].value);
      formData.append('description', this.addForm.controls['description'].value);

      if (this.addForm.controls['bookimage'].value) {
        formData.append('images', this.addForm.controls['bookimage'].value);
      }
      this.books.addbook(formData).subscribe((res)=>{
        console.log(res)
      })
    }
  }


}
