import { Component } from '@angular/core';
import { AdminAuthorFormComponent } from '../admin-author-form/admin-author-form.component';
import { Router, RouterLink } from '@angular/router';
import { AuthorServiceService } from '../../services/author-service.service';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminHeaderComponent } from '../../admin-header/admin-header.component';

@Component({
  selector: 'app-admin-author-list',
  standalone: true,
  imports: [AdminAuthorFormComponent,RouterLink,CommonModule,PaginatorModule, NgxPaginationModule,TableModule,AdminHeaderComponent],
  templateUrl: './admin-author-list.component.html',
  styleUrl: './admin-author-list.component.css'
})
export class AdminAuthorListComponent {
  AuthorsList:Array<any>=[];
  isLoading: boolean = true;
  constructor(private authors:AuthorServiceService,private router:Router){
    
  }
  ngOnInit(){
    this.GetAuthors();
  }
  GetAuthors(){
    this.authors.getAuthors().subscribe({
      next:(response: any) => {
        this.AuthorsList = response;
        this.isLoading = false;
      },
      error:(error) => {
        console.error('Error fetching categories:', error);
        this.isLoading = false;
      }
  });
  }

  DeleteAuthor(authorid:number){
    const isConfirmed = window.confirm('Are you sure you want to delete this Author?');
  
  if (isConfirmed) {
    this.isLoading = true;
    this.authors.deleteAuthor(authorid).subscribe({
      next:(response) => {
        console.log('Author deleted:', response);
        this.GetAuthors();
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
  EditAuthor(authorid:number){
    this.router.navigate(['/AdminAuthorEdit',authorid])
  }
  

}


