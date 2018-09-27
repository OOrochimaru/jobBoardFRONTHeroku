import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'details', component: UsersComponent }
    ]
  }];
@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
