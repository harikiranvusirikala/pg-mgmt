import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin/login/login.component';
import { LoginComponent } from './user/login/login.component';
import { LandingComponent } from './landing/landing.component';
const routes: Routes = [
  { path: '', component: LandingComponent },

  { path: 'admin/login', component: AdminLoginComponent },

  { path: 'user/login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
/** Declares top-level routes for admin and tenant areas. */
export class AppRoutingModule {}
