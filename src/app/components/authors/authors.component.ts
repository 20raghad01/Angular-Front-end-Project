import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GetAuthorsService } from '../../services/get-authors.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [NavbarComponent, NgxPaginationModule, CommonModule, FooterComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  p: number = 1;

  // Dynamic
  authorsArray!: Array<any>;

  constructor(private router:Router, private authorsService: GetAuthorsService){
    authorsService.getauthors().subscribe((response: any) =>{
      this.authorsArray = response;
      console.log(this.authorsArray)
      
    })
    
  }

  author(Id: number){
    this.router.navigate(['/author', Id])
  }
}
