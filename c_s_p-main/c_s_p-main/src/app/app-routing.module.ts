import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RatingComponent } from './rating/rating.component';
import { SuggestusComponent } from './suggestus/suggestus.component';
import { PaddyComponent } from './paddy/paddy.component';
import { MainComponent } from './main/main.component';
import { SignupdetComponent } from './signupdet/signupdet.component';
import { MaizeComponent } from './maize/maize.component';

import { HttpClientModule } from '@angular/common/http';
import { ReadallComponent } from './readall/readall.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'suggestus',component:SuggestusComponent},
  {path:'rating',component:RatingComponent},
  {path:'paddy',component:PaddyComponent},
  {path:'main',component:MainComponent},
  {path:'signup/access',component:SignupdetComponent},
  {path:'',component:MainComponent},
  {path:'maize',component:MaizeComponent},
  {path:'rate',component:RatingComponent},
  {path:'paddy/rall',component:ReadallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
