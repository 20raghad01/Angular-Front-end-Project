import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetbooksService } from '../../services/getbooks.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [NavbarComponent, InputTextModule, FormsModule, InputNumberModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
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
}
