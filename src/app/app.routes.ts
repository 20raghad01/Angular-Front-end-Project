import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound/notfound.component';
import { StatusComponent } from './components/user\'s status/status/status.component';
import { HomeComponent } from './components/home/home/home.component';
import { BooksComponent } from './components/books/books/books.component';
import { SinglebookComponent } from './components/singlebook/singlebook.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [
    { path: '', component:HomeComponent},
    
    { path: 'all', component:StatusComponent },

    { path: 'books', component:BooksComponent },
    { path: 'singleBook/:id', component:SinglebookComponent },

    { path: 'authors', component:AuthorsComponent },
    { path: 'author/:id', component:AuthorComponent },

    { path: 'categories', component:CategoriesComponent },
    { path: 'category/:id', component:CategoryComponent },

    { path: '**', component:NotfoundComponent },
];
