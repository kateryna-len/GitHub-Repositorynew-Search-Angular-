import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
// use separate module with lazy loading for more info  check https://angular.io/guide/lazy-loading-ngmodules
const routes: Routes = [
  { path: '', component: HomeComponent },
  // make all strings to constant
  { path: 'search', component: SearchPageComponent },
  { path: 'repository/:id', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
