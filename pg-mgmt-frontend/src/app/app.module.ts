import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
// eslint-disable-next-line deprecation/deprecation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
  SocialLoginModule,
  SOCIAL_AUTH_CONFIG,
} from '@abacritt/angularx-social-login';
import { LoginComponent } from './user/login/login.component';

/**
 * Bootstraps the Angular application with shared modules and feature screens.
 */
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    // eslint-disable-next-line deprecation/deprecation
    BrowserAnimationsModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
})
export class AppModule {}
