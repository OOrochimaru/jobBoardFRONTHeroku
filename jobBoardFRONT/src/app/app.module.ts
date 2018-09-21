import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './shared/footer.component';
import { AppRouterMoudle } from './app.routing';
import { JobsComponent } from './jobs/jobhome/jobs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { JobModule } from './jobs/job.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    JobsComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterMoudle,
    JobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
