
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRouterModule } from './login.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRouterModule,
    SharedModule
  ],
  providers: [],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
