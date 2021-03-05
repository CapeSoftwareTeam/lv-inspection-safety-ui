import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

const routes: Routes = [
  {path: '', redirectTo: "/login", pathMatch: 'full' },
  {path: 'login',component:LoginComponent},
  {path: 'forgotpassword' ,component: ForgotpasswordComponent},
  {path: 'updatepassword' ,component: UpdatepasswordComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'home',component:HomeComponent, canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
