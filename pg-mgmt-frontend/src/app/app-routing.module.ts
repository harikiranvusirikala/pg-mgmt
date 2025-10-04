import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
/** Declares top-level routes for admin and tenant areas. */
export class AppRoutingModule {}
