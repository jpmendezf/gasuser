import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'singup', loadChildren: './singup/singup.module#SingupPageModule' },
  { path: 'orderone', loadChildren: './orderone/orderone.module#OrderonePageModule' },
  { path: 'ordertwo', loadChildren: './ordertwo/ordertwo.module#OrdertwoPageModule' },
  { path: 'ostatus', loadChildren: './ostatus/ostatus.module#OstatusPageModule' },
  { path: 'pastorder', loadChildren: './pastorder/pastorder.module#PastorderPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
