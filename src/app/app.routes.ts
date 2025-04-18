import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { FindPlaceComponent } from './components/find-place/find-place.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'find-place',
    component: FindPlaceComponent,
  },
  { path: '**', component: LoginComponent },
];
