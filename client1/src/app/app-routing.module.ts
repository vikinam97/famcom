import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [ {
  path: "register",
  component: RegistrationComponent
},{
  path: 'reset-password',
  component: ResetPasswordComponent
},{ 
  path: '',   
  redirectTo: '/login', 
  pathMatch: 'full' 
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
