import { Routes } from '@angular/router';
import { MapComponent } from './pages/map/map.component';
import { AboutComponent } from './pages/about/about.component';

export enum ROUTE {
  ABOUT = 'about',
  MAP = 'map',
}

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: MapComponent },
  { path: ROUTE.MAP, component: MapComponent },
  { path: ROUTE.ABOUT, component: AboutComponent },
];
