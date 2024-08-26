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
import { StartPageComponent } from './components/start-page/start-page.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCatrgoryListComponent } from './admin-categories-components/admin-catrgory-list/admin-catrgory-list.component';
import { AdminAuthorListComponent } from './admin-author-components/admin-author-list/admin-author-list.component';
import { AdminBooksListComponent } from './admin-books-components/admin-books-list/admin-books-list.component';
import { AdminBooksEditFormComponent } from './admin-books-components/admin-books-edit-form/admin-books-edit-form.component';
import { AdminCategoryEditFormComponent } from './admin-categories-components/admin-category-edit-form/admin-category-edit-form.component';
import { AdminAuthorEditFormComponent } from './admin-author-components/admin-author-edit-form/admin-author-edit-form.component';
import { authGuardGuard } from './guard/auth-guard.guard';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { userGuardGuard } from './guard/user-guard.guard';

export const routes: Routes = [
    { path: '', component:StartPageComponent},
    { path: 'UserLogin', component:UserLoginComponent},
    { path: 'UserRegister', component:UserRegisterComponent},
    { path: 'Userhome/:id', component:HomeComponent,canActivate:[userGuardGuard]},
   
    { path: 'all', component:StatusComponent ,canActivate:[userGuardGuard]},

    { path: 'books', component:BooksComponent ,canActivate:[userGuardGuard]},
    { path: 'singleBook/:id', component:SinglebookComponent ,canActivate:[userGuardGuard]},

    { path: 'authors', component:AuthorsComponent ,canActivate:[userGuardGuard]},
    { path: 'author/:id', component:AuthorComponent ,canActivate:[userGuardGuard]},

    { path: 'categories', component:CategoriesComponent ,canActivate:[userGuardGuard]},
    { path: 'category/:id', component:CategoryComponent ,canActivate:[userGuardGuard]},
    { path: 'AdminLogin', component:AdminPanelComponent},
    {path:'Admincategory',component:AdminCatrgoryListComponent,title:'admin',canActivate:[authGuardGuard]},
    {path:'Adminauthors',component:AdminAuthorListComponent,title:'admin',canActivate:[authGuardGuard]},
    {path:'Adminbooks',component:AdminBooksListComponent,title:'admin',canActivate:[authGuardGuard]},
    {path:'AdminBooksEdit/:id',component:AdminBooksEditFormComponent,canActivate:[authGuardGuard]},
    {path:'AdminCategoryEdit/:id',component:AdminCategoryEditFormComponent,canActivate:[authGuardGuard]},
    {path:'AdminAuthorEdit/:id',component:AdminAuthorEditFormComponent,canActivate:[authGuardGuard]},
    { path: '**', component:NotfoundComponent },
];
