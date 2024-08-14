import { Component } from '@angular/core';
import { AdminAuthorFormComponent } from '../admin-author-form/admin-author-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-author-list',
  standalone: true,
  imports: [AdminAuthorFormComponent,RouterLink],
  templateUrl: './admin-author-list.component.html',
  styleUrl: './admin-author-list.component.css'
})
export class AdminAuthorListComponent {
  authors:any[]=[];
}
