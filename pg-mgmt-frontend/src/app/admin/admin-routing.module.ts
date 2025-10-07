import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAuthGuard } from '../core/guards/admin-auth.guard';
import { AdminLoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TenantsComponent } from './tenants/tenants.component';

/**
 * Route map for the admin portal, protecting protected pages with the admin guard.
 */
const routes: Routes = [
  { path: 'login', component: AdminLoginComponent },
  {
    path: '',
    canActivate: [AdminAuthGuard],
    canActivateChild: [AdminAuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'tenants', component: TenantsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
/** Configures child routing for the admin feature area. */
export class AdminRoutingModule {}
