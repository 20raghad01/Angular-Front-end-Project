import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetbooksService } from '../../services/getbooks.service';
import { NavbarComponent } from "../navbar/navbar.component";

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-singlebook',
  standalone: true,
  imports: [NavbarComponent, InputTextModule , FormsModule, InputNumberModule],
  templateUrl: './singlebook.component.html',
  styleUrl: './singlebook.component.css'
})

export class SinglebookComponent {
  name!: any;
  rate!: any;
  comment!: any;

  constructor(private route : ActivatedRoute, private book:GetbooksService){}

  bookDetails:any= {
    reviews: []
  };

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
  
    if(bookId){
      this.book.getbookById(+bookId).subscribe(( response => {
          this.bookDetails = response
          console.log(this.bookDetails.reviews[0]);
      }))
    }
  }

  convertRatingToStars(rating: number) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const fullStarIcon = '<i class="fa-solid fa-star mb-4"></i>';
    const halfStarIcon = '<i class="fa-solid fa-star-half-alt mb-4"></i>';
    const emptyStarIcon = '<i class="fa-regular fa-star mb-4"></i>';

    return fullStarIcon.repeat(fullStars) + halfStarIcon.repeat(halfStar) + emptyStarIcon.repeat(emptyStars);
  }

  // if date of review is "2024-05-23T08:56:21.618Z"
  convertDate(dateString: string): string {
    const splittedDate = dateString.split("T")[0];
    const [year, month, day] = splittedDate.split("-");
    return `${day}-${month}-${year}`;
  }

  sendReview(){
    const newReview = {
      reviewerName: this.name,
      date: new Date().toISOString(),
      comment: this.comment,
      rating: this.rate
    };

    this.bookDetails.reviews.unshift(newReview);
    this.name = '';
    this.rate = '';
    this.comment = '';
  }
}
