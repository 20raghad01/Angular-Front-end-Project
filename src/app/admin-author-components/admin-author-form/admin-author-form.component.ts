import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AuthorServiceService } from "../../services/author-service.service";

@Component({
  selector: "app-admin-author-form",
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: "./admin-author-form.component.html",
  styleUrl: "./admin-author-form.component.css",
})
export class AdminAuthorFormComponent {
  addForm!: FormGroup;
  notvalid: boolean = false;
  constructor(private authors: AuthorServiceService) {
    this.addForm = new FormGroup({
      authorfname: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200),
      ]),
      authorlname: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200),
      ]),
      //authorimage: new FormControl(null),
      authornationality: new FormControl("", Validators.required),
    });
  }
  AddAuthor() {
    if (this.addForm.valid) {
      var data = {
        firstName: this.addForm.value.authorfname,
        lastName: this.addForm.value.authorlname,
        //image:this.addForm.value.authorimage,
        nationality: this.addForm.value.authornationality,
      };

      this.notvalid = false;
      this.authors.addAuthor(data).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.notvalid = true;
    }
  }
}
