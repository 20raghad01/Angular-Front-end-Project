import { Component } from '@angular/core';
import { AdminCatrgoryFormComponent } from '../admin-catrgory-form/admin-catrgory-form.component';
import { CategoriesServiceService } from '../../services/categories-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-catrgory-list',
  standalone: true,
  imports: [AdminCatrgoryFormComponent,CommonModule],
  templateUrl: './admin-catrgory-list.component.html',
  styleUrl: './admin-catrgory-list.component.css'
})
export class AdminCatrgoryListComponent {
  CategoriessList:Array<any>=[];

  constructor(private books:CategoriesServiceService,private router:Router){
    
  }
  ngOnInit(){
    this.GetCategoriess();
  }
  GetCategoriess(){
    this.books.getCategories().subscribe((response:any)=>{
      this.CategoriessList=response.products
      console.log(response);
    })
  }
  DeleteCategory(bookid:number){
    this.books.deleteCategory(bookid).subscribe(
      (response) => {
        console.log('Category deleted:', response);
        
      }
      
    );
  }
  EditCategory(Bid:number){
    this.router.navigate(['/edit',Bid])

  } 

}
