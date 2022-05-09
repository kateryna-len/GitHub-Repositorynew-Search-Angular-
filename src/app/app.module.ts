import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Please use separate module for feature for more info https://angular.io/guide/feature-modules
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserDetailsComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
