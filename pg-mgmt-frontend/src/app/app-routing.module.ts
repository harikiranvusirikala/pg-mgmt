import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin/login/login.component';
import { LoginComponent } from './user/login/login.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminAuthGuard } from './core/guards/admin-auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },

  { path: 'admin/login', component: AdminLoginComponent },
  {
    path: 'admin',
    canActivate: [AdminAuthGuard],
    canActivateChild: [AdminAuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  { path: 'user/login', component: LoginComponent },
  {
    path: 'user',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
/** Declares top-level routes for admin and tenant areas. */
export class AppRoutingModule {}
