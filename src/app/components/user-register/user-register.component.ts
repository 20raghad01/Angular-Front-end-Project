import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  RegisterForm!:FormGroup;
  notvalid:boolean=false;
  imageBase64: string | ArrayBuffer | null = null;

  constructor(private user:UserServiceService,private router:Router){
    this.RegisterForm=new FormGroup({
      userfname: new FormControl('', Validators.required),
      userlname: new FormControl('', Validators.required),
      userimage: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#%]).{8,}$/)]),
      confirmpasswrd: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#%]).{8,}$/)])
    })
      
      
    
    
  }
  AddUser(){
    if (this.RegisterForm.valid) {
      const formData = {
      firstName:this.RegisterForm.controls['userfname'].value,
      lastName:this.RegisterForm.controls['userlname'].value,
      image:this.imageBase64 as string,
      password:this.RegisterForm.controls['password'].value,
      email:this.RegisterForm.controls['email'].value,
      role:'user'};
      this.notvalid = false;
      this.user.register(formData).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/UserLogin']);
        },
        error: (err) => {
          console.error('Error:', err);
          this.notvalid = true;
        }
      });
    } else {
      this.notvalid = true;
    }
  }
  selectedimage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageBase64 = e.target.result;
      };
      reader.readAsDataURL(file); 
    }
  }

  

}
