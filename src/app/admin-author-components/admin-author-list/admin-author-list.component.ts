import { Component } from '@angular/core';
import { AdminAuthorFormComponent } from '../admin-author-form/admin-author-form.component';
import { Router, RouterLink } from '@angular/router';
import { AuthorServiceService } from '../../services/author-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-author-list',
  standalone: true,
  imports: [AdminAuthorFormComponent,RouterLink,CommonModule],
  templateUrl: './admin-author-list.component.html',
  styleUrl: './admin-author-list.component.css'
})
export class AdminAuthorListComponent {
  AuthorsList:Array<any>=[];
  constructor(private authors:AuthorServiceService,private router:Router){
    
  }
  ngOnInit(){
    this.GetAuthors();
  }
  GetAuthors(){
    this.authors.getAuthors().subscribe((response:any)=>{
      this.AuthorsList=response.users
      console.log(this.AuthorsList);
    })
  }

  DeleteAuthor(authorid:number){
    this.authors.deleteAuthor(authorid).subscribe((response) => {
        console.log('Author deleted:', response);
      }
      
    );
    this.GetAuthors();
  }
  EditAuthor(authorid:number){
    this.router.navigate(['/AdminAuthorEdit',authorid])
  }
  

}


