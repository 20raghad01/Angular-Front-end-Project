import { Routes } from '@angular/router';
import { AdminAuthorListComponent } from './admin-author-components/admin-author-list/admin-author-list.component';
import { AdminBooksListComponent } from './admin-books-components/admin-books-list/admin-books-list.component';
import { AdminCatrgoryListComponent } from './admin-categories-components/admin-catrgory-list/admin-catrgory-list.component';
import { AdminBooksEditFormComponent } from './admin-books-components/admin-books-edit-form/admin-books-edit-form.component';

export const routes: Routes = [
    {path:'',component:AdminCatrgoryListComponent,title:'admin'},
    {path:'authors',component:AdminAuthorListComponent,title:'admin'},
    {path:'books',component:AdminBooksListComponent,title:'admin'},
    {path:'edit/:id',component:AdminBooksEditFormComponent}
];
