import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetbooksService } from "../../services/getbooks.service";
import { InputNumberModule } from "primeng/inputnumber";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { GetAuthorsService } from "../../services/get-authors.service";
import { jwtDecode } from "jwt-decode";
import { BooksServiceService } from "../../services/books-service.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-author",
  standalone: true,
  imports: [
    NavbarComponent,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    FooterComponent,
    CommonModule
  ],
  templateUrl: "./author.component.html",
  styleUrl: "./author.component.css",
})
export class AuthorComponent {
  name!: any;
  rate!: any;
  comment!: any;
  tok!:any;
  authorbook!:any;
  auhtorId!:any;
  isLoading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private author: GetAuthorsService,
    private book:GetbooksService
  ) {}

  authorDetails!: any ;

  ngOnInit() {
    this.auhtorId = this.route.snapshot.params["id"];

    if (this.auhtorId) {
      this.author.getauthourById(this.auhtorId).subscribe((response) => {
        this.authorDetails = response;
        
      });
    }
    this.getbooks();
    
  
    this.tok=localStorage.getItem('Usertoken');
    console.log("author id",this.auhtorId);
    
    
  
  }
  getbooks(){
    this.book.getBooks().subscribe((res)=>{
      this.authorbook=res;
      this.isLoading= false;
      
    })
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
}
