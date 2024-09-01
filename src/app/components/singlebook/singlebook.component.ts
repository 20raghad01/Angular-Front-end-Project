import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetbooksService } from "../../services/getbooks.service";
import { NavbarComponent } from "../navbar/navbar.component";

import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { InputNumberModule } from "primeng/inputnumber";
import { CommonModule } from "@angular/common";
import { GetcategoryService } from "../../services/getcategory.service";

interface Category {
  _id: string;
  name: string;
  createdAt: string;
  // Include other properties if needed
}


@Component({
  selector: "app-singlebook",
  standalone: true,
  imports: [NavbarComponent, InputTextModule, FormsModule, InputNumberModule, CommonModule],
  templateUrl: "./singlebook.component.html",
  styleUrl: "./singlebook.component.css",
})

export class SinglebookComponent {
  name!: any;
  rate!: any;
  comment!: any;
  isLoading: boolean = true;
  
  constructor(private route: ActivatedRoute, private bookService: GetbooksService, private categoryService: GetcategoryService){}

  bookDetails: any = {};
  ngOnInit() {
    const bookId = this.route.snapshot.params['id']
    if (bookId) {
      this.bookService.getbookById(bookId).subscribe((response) => {
        this.bookDetails = response;
        this.isLoading = false;
        console.log(this.bookDetails);
      });
    }
  }

  convertRatingToStars(rating: number) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const fullStarIcon = '<i class="fa-solid fa-star mb-4"></i>';
    const halfStarIcon = '<i class="fa-solid fa-star-half-alt mb-4"></i>';
    const emptyStarIcon = '<i class="fa-regular fa-star mb-4"></i>';

    return (
      fullStarIcon.repeat(fullStars) +
      halfStarIcon.repeat(halfStar) +
      emptyStarIcon.repeat(emptyStars)
    );
  }
  
  //Category Name Of Book 
  categoryName: string = '';
  category: any = [];
  getCategoryNameById(id: number){
    this.categoryService.getCategories().subscribe(categories => {
      const category = Array.prototype.find.call(categories, (cat:any) => cat._id === id);

      if (category) {
        this.categoryName = category.name;
      } else {
        this.categoryName = 'Category not found';
      }
    });
    return this.categoryName;
  }

  // Status Dropdown
  selectedStatus: string = 'Read';
  onStatusClick(status: string, event: MouseEvent){
    event.preventDefault();
    return this.selectedStatus = status;
    // Handle backend logic here if needed
  }

  // Rate Stars
  stars = Array(5);
  currentHoveredStar = 0;
  starRate!: number;
  onStarHover(starValue: number) {
    this.currentHoveredStar = starValue;
  }
  onStarLeave() {
    this.currentHoveredStar = 0;
  }
  onStarClick(starValue: number) {
    return this.starRate = starValue;
    console.log(`You clicked ${this.starRate} star(s)`);
    // Handle backend logic here if needed
  }
  
  
  // if date of review is "2024-05-23T08:56:21.618Z"
  convertDate(dateString: string): string {
    const splittedDate = dateString.split("T")[0];
    const [year, month, day] = splittedDate.split("-");
    return `${day}-${month}-${year}`;
  }

  sendReview() {
    const newReview = {
      reviewerName: this.name,
      date: new Date().toISOString(),
      comment: this.comment,
      rating: this.rate,
    };

    this.bookDetails.reviews.unshift(newReview);
    this.name = "";
    this.rate = "";
    this.comment = "";
  }
}
