import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TenantsComponent } from './tenants/tenants.component';
import { AdminLoginComponent } from './login/login.component';

/**
 * Declares admin-facing screens and wires shared dependencies.
 */
@NgModule({
  declarations: [
    HomeComponent,
    RoomsComponent,
    TenantsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AdminRoutingModule,
    AdminLoginComponent,
  ],
})
export class AdminModule {}
