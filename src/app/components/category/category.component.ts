import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { ActivatedRoute, Router } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { GetbooksService } from "../../services/getbooks.service";

@Component({
  selector: "app-category",
  standalone: true,
  imports: [
    NavbarComponent,
    NgxPaginationModule,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: "./category.component.html",
  styleUrl: "./category.component.css",
})
export class CategoryComponent {
  categoryArray!: any;
  p: number = 1;

  categoryId: number = 0;

  constructor(
    private router: Router,
    private booksService: GetbooksService,
    private routerActive: ActivatedRoute
  ) {}

  ngOnInit() {
    this.books();
    this.categoryId = this.routerActive.snapshot.params["id"];
  }
  
  books() {
    this.booksService.getBooks().subscribe((response: any) => {
      this.categoryArray = response;
      
    });
  }

  singlebook(productId: number){
    this.router.navigate(['/singleBook', productId])
  }

  author(Id: number){
    this.router.navigate(['/author', Id])
  }


}
