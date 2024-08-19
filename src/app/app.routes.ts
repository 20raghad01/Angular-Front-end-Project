import { Routes } from '@angular/router';
import { AdminAuthorListComponent } from './admin-author-components/admin-author-list/admin-author-list.component';
import { AdminBooksListComponent } from './admin-books-components/admin-books-list/admin-books-list.component';
import { AdminCatrgoryListComponent } from './admin-categories-components/admin-catrgory-list/admin-catrgory-list.component';
import { AdminBooksEditFormComponent } from './admin-books-components/admin-books-edit-form/admin-books-edit-form.component';
import { AdminCategoryEditFormComponent } from './admin-categories-components/admin-category-edit-form/admin-category-edit-form.component';
import { AdminAuthorEditFormComponent } from './admin-author-components/admin-author-edit-form/admin-author-edit-form.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { authGuardGuard } from './guard/auth-guard.guard';

export const routes: Routes = [
    {path:'',component:AdminPanelComponent,title:'admin'},
    {path:'category',component:AdminCatrgoryListComponent,title:'admin',canActivate:[authGuardGuard]},
    {path:'authors',component:AdminAuthorListComponent,title:'admin',canActivate:[authGuardGuard]},
    {path:'books',component:AdminBooksListComponent,title:'admin',canActivate:[authGuardGuard]},
    {path:'AdminBooksEdit/:id',component:AdminBooksEditFormComponent,canActivate:[authGuardGuard]},
    {path:'AdminCategoryEdit/:id',component:AdminCategoryEditFormComponent,canActivate:[authGuardGuard]},
    {path:'AdminAuthorEdit/:id',component:AdminAuthorEditFormComponent,canActivate:[authGuardGuard]}
];
