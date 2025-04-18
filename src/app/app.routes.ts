import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MapEsriComponent } from './components/map-esri/map-esri.component';
import { FindPlaceComponent } from './components/find-place/find-place.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'home',
    component: LayoutComponent,
  },
  {
    path: 'find-place',
    component: FindPlaceComponent,
  },
  {path : '**', component : LoginComponent}
];
