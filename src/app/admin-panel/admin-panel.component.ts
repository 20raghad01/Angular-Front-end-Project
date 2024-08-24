import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  loginError: boolean = false;
  AdminForm!:FormGroup;
  constructor(private router:Router,private serv:AdminServiceService){
    this.AdminForm=new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
    
  }
  CheckAdmin() {
    if (this.AdminForm.value) {
      this.serv.login(this.AdminForm.value).subscribe({
        next: (value) => {
          localStorage.setItem('token', value.token);
          this.router.navigate(['/Admincategory']);
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
  


