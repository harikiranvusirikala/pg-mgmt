import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
// eslint-disable-next-line deprecation/deprecation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
  SocialLoginModule,
  SOCIAL_AUTH_CONFIG,
} from '@abacritt/angularx-social-login';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    // eslint-disable-next-line deprecation/deprecation
    BrowserAnimationsModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideHotToastConfig({
      position: 'top-right',
      duration: 15000,
      dismissible: true,
      style: {
        background: '#333',
        color: '#fff',
      },
      success: {
        style: { background: '#28a745', color: '#fff' },
        duration: 15000,
      },
      error: {
        style: { background: '#dc3545', color: '#fff' },
        duration: 15000,
      },
      info: {
        style: { background: '#17a2b8', color: '#fff' },
        duration: 15000,
      },
      warning: {
        style: { background: '#ffc107', color: '#212529' },
        duration: 15000,
      },
      loading: {
        style: { background: '#6c757d', color: '#fff' },
        duration: 15000,
      },
    }),
})
export class AppModule {}
