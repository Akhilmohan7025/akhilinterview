import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReisterComponent } from './reister/reister.component';

const routes: Routes = [
  // login path
  {path:"",component:LoginComponent},
  // dashboard path
  {path:"dashboard",component:DashboardComponent},
    // register
  {path:"register",component:ReisterComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
