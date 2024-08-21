import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthorServiceService } from '../../services/author-service.service';

@Component({
  selector: 'app-admin-author-form',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './admin-author-form.component.html',
  styleUrl: './admin-author-form.component.css'
})
export class AdminAuthorFormComponent {
  addForm!:FormGroup;
  notvalid:boolean=false;
  constructor(private authors:AuthorServiceService){
    this.addForm=new FormGroup({
      authorfname: new FormControl('', Validators.required),
      authorlname: new FormControl('', Validators.required),
      authorimage: new FormControl(''),
      authornationality:new FormControl('')
      
    })
    
  }
  AddAuthor(){
    if (this.addForm.valid) {
      const formData = new FormData();
      formData.append('firstName', this.addForm.controls['authorfname'].value);
      formData.append('lastName', this.addForm.controls['authorlname'].value);
      formData.append('image', this.addForm.controls['authorimage'].value);
      formData.append('nationality', this.addForm.controls['authorimage'].value);
      this.notvalid=false;
      this.authors.addAuthor(formData).subscribe((res)=>{
        console.log(res)
        
      })
      
    }
    else{
      this.notvalid=true;
    }
    
  }
}
  

