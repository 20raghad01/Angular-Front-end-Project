import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorServiceService } from '../../services/author-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-author-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admin-author-edit-form.component.html',
  styleUrl: './admin-author-edit-form.component.css'
})
export class AdminAuthorEditFormComponent {
  EditForm!:FormGroup;
  AuthorId!:number;
  AuthorDetails:any;
  CategoriessList!:any;
  priceList!:any;
  notvalid:boolean=false;
 
  
  constructor(private routerActive:ActivatedRoute,private serv:AuthorServiceService,private router:Router){
    this.EditForm=new FormGroup({
      authorfname: new FormControl('', Validators.required),
      authorlname: new FormControl('', Validators.required),
      authorimage: new FormControl(''),
      authornationality: new FormControl(''),
      
    })
  }
    
  ngOnInit() {
    this.AuthorId=this.routerActive.snapshot.params['id']
    this.serv.getOneAuthor(this.AuthorId).subscribe((response:any)=>{
      this.AuthorDetails=response;
      this.populateForm();
      
    })
   
      
  }
  
  
  populateForm() {
    this.EditForm.patchValue({
      authorfname: this.AuthorDetails.firstName,
      authorlname: this.AuthorDetails.lastName,
      authorimage: this.AuthorDetails.image,
      authornationality: this.AuthorDetails.phone
    });


  }
  
  UpdateAuthor(){
    var data={
      firstName:this.EditForm.value.authorfname,
      lastName:this.EditForm.value.authorlname,
      image:this.EditForm.value.authorimage,
      nationality:this.EditForm.value.authornationality

    }
    if(this.EditForm.valid){
      this.notvalid=false;
      this.serv.EditAuthor(data,this.AuthorId).subscribe({
        next:(res:any)=>{
          console.log(res);
          alert("Author updated")
        },
        error:(err:any)=>{
          console.log(err)
        }
      })
      
      
      this.router.navigate(['/authors'])
      
    }
    else{
      this.notvalid=true;
    }

    }
    

}
