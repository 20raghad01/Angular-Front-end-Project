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
  notvalid: boolean = false;
  cat!: any;
  auth!: Array<any>;
  imageBase64: string | ArrayBuffer | null = null;
  constructor(
    private routerActive: ActivatedRoute,
    private serv: BooksServiceService,
    private router: Router,
    private bookcategory: CategoriesServiceService,
    private bookauthor: AuthorServiceService
  ) {
    this.EditForm = new FormGroup({
      booktitle: new FormControl(""),
      category: new FormControl(""),
      author: new FormControl(""),
      description: new FormControl(""),
      bookimage: new FormControl(""),
    });
  }

  ngOnInit() {
    
    this.BookId = this.routerActive.snapshot.params["id"];
    this.serv.getOneBook(this.BookId).subscribe((response: any) => {
      this.BookDetails = response;
      this.getcategories();
      this.getauthor();
      console.log(this.BookDetails);
    });
  }
  
  getcategories() {
    this.bookcategory.getCategories().subscribe((response: any) => {
      this.cat = response;
      this.populateForm(); 
    });
  }
  
  getauthor() {
    this.bookauthor.getAuthors().subscribe((response: any) => {
      this.auth = response;
      this.populateForm(); 
    });
  }
  populateForm() {
    this.EditForm.patchValue({
      booktitle: this.BookDetails.title,
      category: this.BookDetails.Category,
      author: this.BookDetails.author?._id,
      description: this.BookDetails.description,
    
    });
    this.imageBase64 = this.BookDetails.image; 
  }

  UpdateBook() {
    var data = {
      title: this.EditForm.value.booktitle,
      category: this.EditForm.value.category,
      author: this.EditForm.value.author,
      description: this.EditForm.value.description,
      image: this.imageBase64 as string,
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
