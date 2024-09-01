import { Component } from '@angular/core';
import { AdminCatrgoryFormComponent } from '../admin-catrgory-form/admin-catrgory-form.component';
import { CategoriesServiceService } from '../../services/categories-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from '../../admin-header/admin-header.component';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-admin-catrgory-list',
  standalone: true,
  imports: [TableModule,AdminCatrgoryFormComponent,CommonModule,AdminHeaderComponent,PaginatorModule, NgxPaginationModule],
  templateUrl: './admin-catrgory-list.component.html',
  styleUrl: './admin-catrgory-list.component.css'
})
export class AdminCatrgoryListComponent {
  CategoriessList!:any;
  isLoading: boolean = true;
  constructor(private categories:CategoriesServiceService,private router:Router){
    
  }
  ngOnInit(){
    this.GetCategoriess();
  }
  GetCategoriess(){
    this.categories.getCategories().subscribe({
      next:(response: any) => {
        this.CategoriessList = response;
        this.isLoading = false;
      },
      error:(error) => {
        console.error('Error fetching categories:', error);
        this.isLoading = false;
      }
  });
      
    }
  
  DeleteCategory(categoryid:number){
    const isConfirmed = window.confirm('Are you sure you want to delete this category?');
  
  if (isConfirmed) {
    this.isLoading = true;
    this.categories.deleteCategory(categoryid).subscribe({
      next:(response) => {
        console.log('Category deleted:', response);
        this.GetCategoriess();
        this.isLoading = false;
      },
      error:(error) => {
        console.error('Error deleting category:', error);
        const errorMessage = error.error?.message || error.message || 'An unexpected error occurred';
          alert(`Error: ${errorMessage}`);
          this.isLoading = false;
      }
    });
  }
  }
  EditCategory(Bid:number){
    this.router.navigate(['/AdminCategoryEdit',Bid])

  } 

}
