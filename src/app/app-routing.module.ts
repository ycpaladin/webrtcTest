import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./pages/page01/page01.component').then((m) => m.Page01Component),
  // },
  // {
  //   path: 'view',
  //   loadComponent: () =>
  //     import('./pages/page02/page02.component').then((m) => m.Page02Component),
  // },
  {
    path: 'robot',
    loadComponent: () =>
      import('./pages/page03/page03.component').then((m) => m.Page03Component),
  },
  {
    path: 'control',
    loadComponent: () =>
      import('./pages/page04/page04.component').then((m) => m.Page04Component),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
