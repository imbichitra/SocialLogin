import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SocialLoginModule, AuthServiceConfig, LoginOpt } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { LoginComponent } from './login/login.component';

const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; 
let config = new AuthServiceConfig([
 
  {
    id:FacebookLoginProvider.PROVIDER_ID,
    provider:new FacebookLoginProvider("454381012082041")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide:AuthServiceConfig,
      useFactory:provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
