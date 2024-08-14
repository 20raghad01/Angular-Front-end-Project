import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-catrgory-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admin-catrgory-form.component.html',
  styleUrl: './admin-catrgory-form.component.css'
})
export class AdminCatrgoryFormComponent {
  AddForm!:FormGroup;
  AddCategory(){

  }
}
