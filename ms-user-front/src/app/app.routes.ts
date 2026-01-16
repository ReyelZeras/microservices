import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form';
import { UserListComponent } from './components/user-list/user-list';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
  { path: 'cadastrar', component: UserFormComponent },
  { path: 'editar', component: UserFormComponent },
  { path: 'listar', component: UserListComponent }
];
