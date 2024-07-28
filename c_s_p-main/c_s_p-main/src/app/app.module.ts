import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { PaddyComponent } from './paddy/paddy.component';
import { SuggestusComponent } from './suggestus/suggestus.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {MatIconModule} from '@angular/material/icon';
import { SignupdetComponent } from './signupdet/signupdet.component';
import { DeletesigninComponent } from './deletesignin/deletesignin.component';
import { LogoutserviseService } from './logoutservise.service';
import { MaizeComponent } from './maize/maize.component';
import { ReadallComponent } from './readall/readall.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    AboutusComponent,
    ContactusComponent,
    RatingComponent,
    PaddyComponent,
    SuggestusComponent,
    HeaderComponent,
    MainComponent,
    SignupdetComponent,
    DeletesigninComponent,
    MaizeComponent,
    ReadallComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    
    HttpClientModule,
    MatToolbarModule,
    MatTooltipModule,RouterModule,MatSidenavModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
