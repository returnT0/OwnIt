import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavComponent } from './components/nav/nav.component';
import { HelpinfoComponent } from './components/helpinfo/helpinfo.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./shared/interceptors/auth.interceptor";
import {LoggingInterceptor} from "./shared/interceptors/logging.interceptor";
import {ErrorInterceptor} from "./shared/interceptors/error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    AboutComponent,
    NotfoundComponent,
    NavComponent,
    HelpinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
