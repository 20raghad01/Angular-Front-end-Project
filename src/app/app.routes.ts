import { Routes } from '@angular/router';
import { AdminAuthorListComponent } from './admin-author-components/admin-author-list/admin-author-list.component';
import { AdminBooksListComponent } from './admin-books-components/admin-books-list/admin-books-list.component';
import { AdminCatrgoryListComponent } from './admin-categories-components/admin-catrgory-list/admin-catrgory-list.component';
import { AdminBooksEditFormComponent } from './admin-books-components/admin-books-edit-form/admin-books-edit-form.component';
import { AdminCategoryEditFormComponent } from './admin-categories-components/admin-category-edit-form/admin-category-edit-form.component';
import { AdminAuthorEditFormComponent } from './admin-author-components/admin-author-edit-form/admin-author-edit-form.component';

export const routes: Routes = [
    {path:'adminhome',component:AdminCatrgoryListComponent,title:'admin'},
    {path:'authors',component:AdminAuthorListComponent,title:'admin'},
    {path:'books',component:AdminBooksListComponent,title:'admin'},
    {path:'AdminBooksEdit/:id',component:AdminBooksEditFormComponent},
    {path:'AdminCategoryEdit/:id',component:AdminCategoryEditFormComponent},
    {path:'AdminAuthorEdit/:id',component:AdminAuthorEditFormComponent}
];
