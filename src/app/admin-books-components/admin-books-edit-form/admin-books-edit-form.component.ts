import { Component} from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule,FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-books-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admin-books-edit-form.component.html',
  styleUrl: './admin-books-edit-form.component.css'
})
export class AdminBooksEditFormComponent {
  EditForm!:FormGroup;
  BookId!:number;
  BookDetails:any;
  
 
  
  constructor(private routerActive:ActivatedRoute,private product:BooksServiceService){
    this.EditForm=new FormGroup({
      booktitle: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      bookimage: new FormControl('', Validators.required)
    })
  }
    
  ngOnInit() {
    this.BookId=this.routerActive.snapshot.params['id']
    this.product.getOneBook(this.BookId).subscribe((response:any)=>{
      this.BookDetails=response;
      this.populateForm();
      
    })
  }
  populateForm() {
    // Populate the form with book details
    this.EditForm.patchValue({
      booktitle: this.BookDetails.booktitle,
      category: this.BookDetails.category,
      author: this.BookDetails.author,
      description: this.BookDetails.description
    });

    // Handle file input separately as it's not included in patchValue
    // You might need to store it in a variable if you plan to use it for update
  }
  EditBook(){}
}
