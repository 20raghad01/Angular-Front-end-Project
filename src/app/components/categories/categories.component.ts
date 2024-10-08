import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GetcategoryService } from '../../services/getcategory.service';
import { FooterComponent } from "../footer/footer.component";
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NavbarComponent, NgxPaginationModule, CommonModule, FooterComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent {
img : string= "assets/imgs/logo.png"
  p: number = 1;
  isLoading: boolean = true;
  // Dynamic
  categoriesArray!: Array<any>;

  constructor(private router:Router, private categoryService: GetcategoryService){
    categoryService.getCategories().subscribe((response: any) =>{
      this.categoriesArray = response;
      this.isLoading = false;
      
    })
    
  }
  tok!:any;
  
  ngOnInit(){
    this.tok=localStorage.getItem('Usertoken');
    
  }

  category(Id: number){
    this.router.navigate(['/category', Id])
  }
}
