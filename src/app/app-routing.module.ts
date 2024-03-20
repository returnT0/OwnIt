import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {AboutComponent} from "./components/about/about.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
