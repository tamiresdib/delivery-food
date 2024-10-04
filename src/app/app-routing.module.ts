import { Routes } from '@angular/router';
import { PageRoutes } from './enums/page-routes.enum';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: PageRoutes.HOME,
    component: HomeComponent,
    data: { animation: PageRoutes.HOME }
  }
];
