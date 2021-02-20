import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureareaComponent } from './authorization/securearea/securearea.component';
import { LoginComponent } from './Users/login/login.component';
import { NewUserComponent } from './Users/new-user/new-user.component';
import { AuthorizationGuardService } from './authorization/services/authorization-guard.service';
import { AdminControlsComponent } from './authorization/admin-controls/admin-controls.component';
import { ViewpostsComponent } from './Posts/viewposts/viewposts.component';
import { CreatepostComponent } from './Posts/createpost/createpost.component';
import { EditpostComponent } from './Posts/editpost/editpost.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'viewposts',
    pathMatch: 'full'    
  },
  {
    path: 'newuser',
    component: NewUserComponent
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'securearea',
    component: SecureareaComponent,
    canActivate: [AuthorizationGuardService]
  },
  {
    path: 'admincontrols',
    component: AdminControlsComponent,
    canActivate: [AuthorizationGuardService]
  }, 
  {
    path: 'newpost',
    component: CreatepostComponent,
    canActivate: [AuthorizationGuardService]
  }, 
  {
    path: 'viewposts',
    component: ViewpostsComponent
  }, 
  {
    path: 'editpost',
    component: EditpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
