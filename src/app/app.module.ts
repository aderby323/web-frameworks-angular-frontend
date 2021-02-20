import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './Users/new-user/new-user.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './Users/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './Users/services/user.service';
import { SecureareaComponent } from './authorization/securearea/securearea.component';
import { AdminControlsComponent } from './authorization/admin-controls/admin-controls.component';
import { CreatepostComponent } from './Posts/createpost/createpost.component';
import { ViewpostsComponent } from './Posts/viewposts/viewposts.component';
import { PostitemComponent } from './Posts/postitem/postitem.component';
import { EditpostComponent } from './Posts/editpost/editpost.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NavComponent,
    LoginComponent,
    SecureareaComponent,
    AdminControlsComponent,
    CreatepostComponent,
    ViewpostsComponent,
    PostitemComponent,
    EditpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
