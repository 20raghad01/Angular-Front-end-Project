import { Component, Input} from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule,FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoriesServiceService } from '../../services/categories-service.service';
import { AdminHeaderComponent } from '../../admin-header/admin-header.component';

@Component({
  selector: 'app-admin-books-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,AdminHeaderComponent],
  templateUrl: './admin-books-edit-form.component.html',
  styleUrl: './admin-books-edit-form.component.css'
})
export class AdminBooksEditFormComponent {
 
  EditForm!:FormGroup;
  BookId!:number;
  BookDetails:any;
  CategoriessList!:any;
  priceList!:any;
  notvalid:boolean=false;
 
  
  constructor(private routerActive:ActivatedRoute,private serv:BooksServiceService,private router:Router){
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
    this.serv.getOneBook(this.BookId).subscribe((response:any)=>{
      this.BookDetails=response;
      this.populateForm();
      
    })
    this.serv.getbooks().subscribe((response:any)=>{
      this.priceList=response.products;
      
    })
  }
  selectimage(event:any){
    const file = event.target.files[0];
    console.log(file)

  }
  
  populateForm() {
    this.EditForm.patchValue({
      booktitle: this.BookDetails.title,
      category: this.BookDetails.category,
      author: this.BookDetails.price,
      description: this.BookDetails.description,
      bookimage: this.BookDetails.images
    });


  }
  
  UpdateBook(){
    var data={
      title:this.EditForm.value.booktitle,
      category:this.EditForm.value.category,
      price:this.EditForm.value.author,
      description:this.EditForm.value.description,
      images:this.EditForm.value.bookimage

    }
    if(this.EditForm.valid){
      this.notvalid=false;
      this.serv.EditBook(data,this.BookId).subscribe({
        next:(res:any)=>{
          console.log(res);
          alert("Book updated")
        },
        error:(err:any)=>{
          console.log(err)
        }
      })
      
      
      this.router.navigate(['/books'])

    }
    else{
      this.notvalid=true;
    }
    
    
  }
}
