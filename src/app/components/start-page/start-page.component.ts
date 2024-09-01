import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { GetbooksService } from '../../services/getbooks.service';
import { CommonModule } from '@angular/common';
import { GetAuthorsService } from '../../services/get-authors.service';
import { FooterComponent } from '../footer/footer.component';
import { GetcategoryService } from '../../services/getcategory.service';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [RouterLinkActive, RouterLink,CommonModule,FooterComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent {
  productsArray!: Array<any>;
  authorsArray!: Array<any>;
  categoriesArray!: Array<any>;
  isLoading: boolean = true;
  Charles:string="Charles"

  constructor(private router: Router, private booksService: GetbooksService,private authorsService: GetAuthorsService,private categoryService: GetcategoryService) {
    
  }
  ngOnInit() {
    this.getstarted();
    this.isLoading = false;

  }
  
  getstarted(){
    this.booksService.getBooks().subscribe((response: any) => {
      this.productsArray = response;
      
    });
    this.authorsService.getauthors().subscribe((response: any) =>{
      this.authorsArray = response;
      
      
    })
    this.categoryService.getCategories().subscribe((response: any) =>{
      this.categoriesArray = response;
      
      
    })

  }
  singlebook(productId: number) {
    this.router.navigate(["/singleBook", productId]);
    console.log(productId);
    
  }
  author(Id: number){
    this.router.navigate(['/author', Id])
  }
  category(Id: number){
    this.router.navigate(['/category', Id])
  }

}
