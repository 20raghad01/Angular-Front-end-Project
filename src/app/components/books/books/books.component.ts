import { Component } from "@angular/core";
import { NavbarComponent } from "../../navbar/navbar.component";

import { TableModule } from "primeng/table";

import { NgxPaginationModule } from "ngx-pagination";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { GetbooksService } from "../../../services/getbooks.service";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: "app-books",
  standalone: true,
  imports: [
    NavbarComponent,
    TableModule,
    NgxPaginationModule,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: "./books.component.html",
  styleUrl: "./books.component.css",
})
export class BooksComponent {
  // Paginator
  p: number = 1;

  // Dynamic
  productsArray!: Array<any>;

  constructor(private router: Router, private booksService: GetbooksService) {
    booksService.getBooks().subscribe((response: any) => {
      this.productsArray = response;
      console.log(this.productsArray);
    });
  }

  singlebook(productId: number) {
    this.router.navigate(["/singleBook", productId]);
    console.log(productId);
    
  }
}
