import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoticeDetailsComponent } from './notice-details/notice-details.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'app-notice-details/:id', pathMatch:"full",component: NoticeDetailsComponent,},
  { path: 'edit/:id', pathMatch:"full",component: EditComponent,},
  {path:'add',pathMatch:"full",component:AddComponent},
  {path:'login',pathMatch:"full",component:LoginComponent},
  {path:"signup",pathMatch:"full",component:SignupComponent}
];

export default routes;
