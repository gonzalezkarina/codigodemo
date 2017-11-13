import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'; 
import { RegisterComponent } from './components/register/register.component';
import { HomeComponect } from './components/home/home.component';
import { Home2Componect } from './components/home2/home2.component';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponect,
    Home2Componect
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginRedirect]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoginRedirect]
      },
      {
        path: 'home',
        component: HomeComponect,
        canActivate:
        [EnsureAuthenticated]
      },
      {
        path: 'home2',
        component: Home2Componect,
        canActivate:
        [EnsureAuthenticated]
      }
    ])
  ],
  providers: [ 
    EnsureAuthenticated,
    LoginRedirect
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
