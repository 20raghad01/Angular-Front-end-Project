import { Component } from '@angular/core';
import { AdminCatrgoryFormComponent } from '../admin-catrgory-form/admin-catrgory-form.component';
import { CategoriesServiceService } from '../../services/categories-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-catrgory-list',
  standalone: true,
  imports: [AdminCatrgoryFormComponent,CommonModule],
  templateUrl: './admin-catrgory-list.component.html',
  styleUrl: './admin-catrgory-list.component.css'
})
export class AdminCatrgoryListComponent {
  CategoriessList!:any;

  constructor(private categories:CategoriesServiceService,private router:Router){
    
  }
  ngOnInit(){
    this.GetCategoriess();
  }
  GetCategoriess(){
    this.categories.getCategories().subscribe((response:any)=>{
      this.CategoriessList=response
      
    })
  }
  DeleteCategory(categoryid:number){
    this.categories.deleteCategory(categoryid).subscribe(
      (response) => {
        console.log('Category deleted:', response);
        
      }
      
    );
    this.GetCategoriess();
  }
  EditCategory(Bid:number){
    this.router.navigate(['/AdminCategoryEdit',Bid])

  } 

}
