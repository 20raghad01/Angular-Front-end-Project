import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthorServiceService } from "../../services/author-service.service";
import { CommonModule } from "@angular/common";
import { AdminHeaderComponent } from "../../admin-header/admin-header.component";

@Component({
  selector: "app-admin-author-edit-form",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AdminHeaderComponent],
  templateUrl: "./admin-author-edit-form.component.html",
  styleUrl: "./admin-author-edit-form.component.css",
})
export class AdminAuthorEditFormComponent {
  EditForm!: FormGroup;
  AuthorId!: number;
  AuthorDetails: any;
  CategoriessList!: any;
  priceList!: any;
  notvalid: boolean = false;
  imageBase64: string | ArrayBuffer | null = null;

  constructor(
    private routerActive: ActivatedRoute,
    private serv: AuthorServiceService,
    private router: Router
  ) {
    this.EditForm = new FormGroup({
      authorfname: new FormControl("", [Validators.required, Validators.minLength(3)]),
      authorlname: new FormControl("", [Validators.required, Validators.minLength(3)]),
      authorimage: new FormControl(""),
      authornationality: new FormControl(""),
    });
  }

  ngOnInit() {
    this.AuthorId = this.routerActive.snapshot.params["id"];
    this.serv.getOneAuthor(this.AuthorId).subscribe((response: any) => {
      this.AuthorDetails = response;
      this.populateForm();
    });
  }

  populateForm() {
    this.EditForm.patchValue({
      authorfname: this.AuthorDetails.firstName,
      authorlname: this.AuthorDetails.lastName,
      authornationality: this.AuthorDetails.nationality,
    });
    this.imageBase64 = this.AuthorDetails.image; 
  }

  UpdateAuthor() {
    var data = {
      firstName: this.EditForm.value.authorfname,
      lastName: this.EditForm.value.authorlname,
      image: this.imageBase64 as string,
      nationality: this.EditForm.value.authornationality,
    };
    if (this.EditForm.valid) {
      this.notvalid = false;
      this.serv.EditAuthor(data, this.AuthorId).subscribe({
        next: (res: any) => {
          console.log(res);
          alert("Author updated");
        },
        error: (err: any) => {
          console.log(err);
        },
      });

      this.router.navigate(["/Adminauthors"]);
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
