import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
