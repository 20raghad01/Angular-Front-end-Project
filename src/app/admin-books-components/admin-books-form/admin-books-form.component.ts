import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { BooksServiceService } from "../../services/books-service.service";
import { CategoriesServiceService } from "../../services/categories-service.service";
import { AuthorServiceService } from "../../services/author-service.service";

@Component({
  selector: "app-admin-books-form",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./admin-books-form.component.html",
  styleUrl: "./admin-books-form.component.css",
})
export class AdminBooksFormComponent {
  addForm!: FormGroup;
  notvalid: boolean = false;
  cat!: any;
  auth!: Array<any>;

  BooksList: Array<any> = [];
  constructor(
    private books: BooksServiceService,
    private bookcategory: CategoriesServiceService,
    private bookauthor: AuthorServiceService
  ) {
    this.addForm = new FormGroup({
      booktitle: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      //author:new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      bookimage: new FormControl("", Validators.required),
    });
  }
  ngOnInit() {
    this.GetBooks();
    this.getcategories();
    this.getauthor();
  }
  GetBooks() {
    this.books.getbooks().subscribe((response: any) => {
      this.BooksList = response;
    });
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
  AddBook() {
    if (this.addForm.valid) {
      this.notvalid = false;
      const formData = {
        title: this.addForm.controls["booktitle"].value,
        Category: this.addForm.controls["category"].value,
        //author: { _id: this.addForm.controls["author"].value },
        Ddescription: this.addForm.controls["description"].value,
        image: this.addForm.controls["bookimage"].value,
      };
      this.books.addbook(formData).subscribe((res) => {
        console.log(res);
      });
      this.GetBooks();
    } else {
      this.notvalid = true;
    }
  }
}
