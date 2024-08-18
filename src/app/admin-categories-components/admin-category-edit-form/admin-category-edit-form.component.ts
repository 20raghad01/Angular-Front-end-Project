import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesServiceService } from '../../services/categories-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-category-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admin-category-edit-form.component.html',
  styleUrl: './admin-category-edit-form.component.css'
})
export class AdminCategoryEditFormComponent {
  EditForm!:FormGroup;
  CatId!:number;
  CategoryDetails:any;
  
 
  
  constructor(private routerActive:ActivatedRoute,private serv:CategoriesServiceService,private router:Router){
    this.EditForm=new FormGroup({
      categorytitle: new FormControl('', Validators.required),
      
    })
  }
    
  ngOnInit() {
    this.CatId=this.routerActive.snapshot.params['id']
    this.serv.getOneCategory(this.CatId).subscribe((response:any)=>{
      this.CategoryDetails=response;
      this.populateForm();
      
    })
    
  }
  
  populateForm() {
    this.EditForm.patchValue({
      categorytitle: this.CategoryDetails.title,
      
    });


  }
  
  UpdateCategory(){
    var data={
      title:this.EditForm.value.categorytitle
    }
    this.serv.EditCategory(data,this.CatId).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("Category updated")
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
    
    
    this.router.navigate(['/adminhome'])
    
  }

}
