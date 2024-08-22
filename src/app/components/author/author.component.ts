import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetbooksService } from "../../services/getbooks.service";
import { InputNumberModule } from "primeng/inputnumber";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { GetAuthorsService } from "../../services/get-authors.service";

@Component({
  selector: "app-author",
  standalone: true,
  imports: [
    NavbarComponent,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    FooterComponent,
  ],
  templateUrl: "./author.component.html",
  styleUrl: "./author.component.css",
})
export class AuthorComponent {
  name!: any;
  rate!: any;
  comment!: any;

  constructor(
    private route: ActivatedRoute,
    private author: GetAuthorsService
  ) {}

  authorDetails: any = {
    // reviews: []
  };

  ngOnInit() {
    const auhtorId = this.route.snapshot.params["id"];

    if (auhtorId) {
      this.author.getauthourById(auhtorId).subscribe((response) => {
        this.authorDetails = response;
        console.log(this.authorDetails.reviews[0]);
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
}
