import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GetcategoryService } from '../../services/getcategory.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NavbarComponent, NgxPaginationModule, CommonModule, FooterComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent {
  categoriesArray: Array<any> = [
    {
      id: 1,
      img: "assets/imgs/logo.png",
      name: "Sports"
    },
    {
      id: 2,
      img: "assets/imgs/logo.png",
      name: "Art"
    },
    {
      id: 3,
      img: "assets/imgs/logo.png",
      name: "Horror"
    },
    {
      id: 4,
      img: "assets/imgs/logo.png",
      name: "Society"
    },
    {
      id: 5,
      img: "assets/imgs/logo.png",
      name: "Romance"
    },
    {
      id: 6,
      img: "assets/imgs/logo.png",
      name: "Fiction"
    },
  ];
  p: number = 1;

  // Dynamic
  // categoriesArray!: Array<any>;

  constructor(private router:Router, private categoryService: GetcategoryService){
  //   categoryService.getCategories().subscribe((response: any) =>{
  //     this.categoriesArray = response.products;
  //     console.log(this.categoriesArray)
      
  //   })
    
  }

  category(Id: number){
    this.router.navigate(['/category', Id])
  }
}
