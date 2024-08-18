import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriesServiceService } from '../../services/categories-service.service';

@Component({
  selector: 'app-admin-catrgory-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admin-catrgory-form.component.html',
  styleUrl: './admin-catrgory-form.component.css'
})
export class AdminCatrgoryFormComponent {
  AddForm!:FormGroup;
  constructor(private categories:CategoriesServiceService){
    this.AddForm=new FormGroup({
      cattitle: new FormControl('', Validators.required)})
  }
  
  
  AddCategory(){
    if (this.AddForm.valid) {
      const formData = new FormData();
      formData.append('title', this.AddForm.controls['cattitle'].value);
      this.categories.addCategory(formData).subscribe((res)=>{
        console.log(res)
        
      })
      
    }

  }
}
