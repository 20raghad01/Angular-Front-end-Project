import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  loginError: boolean = false;
  UserForm!:FormGroup;
  constructor(private router:Router,private serv:UserServiceService){
    this.UserForm=new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
    
  }
  CheckUser() {
    if (this.UserForm.value) {
      this.serv.login(this.UserForm.value).subscribe({
        next: (value) => {
          localStorage.setItem('Usertoken', value.token);
          this.router.navigate(['/Userhome']);
          this.loginError = false;
        },
        error: (err) => {
          console.log("Cannot login");
          this.loginError = true; 
        }
      });
    }
    
    
  }

}
