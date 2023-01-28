import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


// used to create fake backend
import {  fakeBackendProvider } from './_helpers';

import { JwtInterceptor, ErrorInterceptor, appInitializer } from'./_helpers';
import { AccountService } from './_services/account.service';
import { AlertComponent } from './_components/alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer,
    multi: true, deps: [AccountService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor,
    multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor,
    multi: true },

    // provider used to create fake backend
    fakeBackendProvider
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
