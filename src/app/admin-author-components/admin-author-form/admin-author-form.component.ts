import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-author-form',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './admin-author-form.component.html',
  styleUrl: './admin-author-form.component.css'
})
export class AdminAuthorFormComponent {
  
}
