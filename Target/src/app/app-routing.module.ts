import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import{ LandingComponent} from './components/landing/landing.component';
import{ PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import{ HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"register",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  //{path:"",redirectTo:"register",pathMatch:"full"}
  {path:"",component:LandingComponent},
  
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
