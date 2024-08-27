import { Component, Input } from "@angular/core";
import { BooksServiceService } from "../../services/books-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CategoriesServiceService } from "../../services/categories-service.service";
import { AdminHeaderComponent } from "../../admin-header/admin-header.component";
import { AuthorServiceService } from "../../services/author-service.service";

@Component({
  selector: "app-admin-books-edit-form",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AdminHeaderComponent],
  templateUrl: "./admin-books-edit-form.component.html",
  styleUrl: "./admin-books-edit-form.component.css",
})
export class AdminBooksEditFormComponent {
  EditForm!: FormGroup;
  BookId!: number;
  BookDetails: any;
  CategoriessList!: any;
  priceList!: any;
  notvalid: boolean = false;
  cat!: any;
  auth!: Array<any>;

  constructor(
    private routerActive: ActivatedRoute,
    private serv: BooksServiceService,
    private router: Router,
    private bookcategory: CategoriesServiceService,
    private bookauthor: AuthorServiceService
  ) {
    this.EditForm = new FormGroup({
      booktitle: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      author: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      bookimage: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
    this.getcategories();
    this.getauthor();
    this.BookId = this.routerActive.snapshot.params["id"];
    this.serv.getOneBook(this.BookId).subscribe((response: any) => {
      this.BookDetails = response;
      this.populateForm();
    });
    this.serv.getbooks().subscribe((response: any) => {
      this.priceList = response.products;
    });
  }

  selectimage(event: any) {
    const file = event.target.files[0];
    console.log(file);
  }
  getcategories() {
    this.bookcategory.getCategories().subscribe((response: any) => {
      this.cat = response;
    });
  }
  getauthor() {
    this.bookauthor.getAuthors().subscribe((response: any) => {
      console.log("API Response:", response);
      this.auth = response;
    });
  }
  populateForm() {
    this.EditForm.patchValue({
      booktitle: this.BookDetails.title,
      category: this.BookDetails.category,
      author: this.BookDetails.author,
      description: this.BookDetails.description,
      bookimage: this.BookDetails.image,
    });
  }

  UpdateBook() {
    var data = {
      title: this.EditForm.value.booktitle,
      category: this.EditForm.value.category,
      author: this.EditForm.value.author,
      description: this.EditForm.value.description,
      image: this.EditForm.value.bookimage,
    };
    if (this.EditForm.valid) {
      this.notvalid = false;
      this.serv.EditBook(data, this.BookId).subscribe({
        next: (res: any) => {
          console.log(res);
          alert("Book updated");
        },
        error: (err: any) => {
          console.log(err);
        },
      });

      this.router.navigate(["/Adminbooks"]);
    } else {
      this.notvalid = true;
    }
  }
}
