import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'index',
    component: Home,
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.About),
  },
  {
    path: 'consultAct',
    loadComponent: () =>
      import('./consult-activite/consult-activite').then((m) => m.ConsultActivite),
  },
  {
    path: 'consultAct/:id',
    loadComponent: () =>
      import('./consult-activite/consult-activite').then((m) => m.ConsultActivite),
  },
];
