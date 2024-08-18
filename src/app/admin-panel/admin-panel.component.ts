import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  constructor(private router:Router){}
  user:string='mina'
  password:string='min123'
  CheckAdmin(formValue: { AdminUserName: string; AdminPassword: string }) {
    console.log('Form Submitted!', formValue);

    if (formValue.AdminUserName==this.user && formValue.AdminPassword==this.password) {
      console.log(typeof(formValue.AdminUserName))
      //this.router.navigate(['/adminhome'])

    } else {
      console.error('Form is invalid');
    }
  }
  }
  


