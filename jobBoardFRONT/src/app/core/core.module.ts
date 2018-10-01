
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {
  ApiService,
  JwtService
} from './services';
import { UserService } from './services/user.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttptokenInterceptor } from './interceptors/http.token.interceptor';
import { JobService } from './services/job.service';
@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttptokenInterceptor, multi: true
    },
    ApiService,
    JwtService,
    UserService,
    JobService
  ],
  exports: [
  ]
})
export class CoreModule { }
