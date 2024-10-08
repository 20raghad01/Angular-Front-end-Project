import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgIf],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  constructor(private out:AdminServiceService){}
  logout(){
    this.out.logout();
  }
  logged:boolean=this.out.isLoggedIn();

}
