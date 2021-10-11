import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdjusterComponent } from './adjuster/adjuster.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'first-component', component: AdjusterComponent },
  // { path: 'home', component: HomePageComponent },

  { path: 'home', loadChildren: () => import('../app/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
