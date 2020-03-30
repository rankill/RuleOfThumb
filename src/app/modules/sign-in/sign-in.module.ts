import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule} from '@shared/shared.module';
import {SignInRoutingModule} from '@app/modules/sign-in/sign-in-routing.module';
import {SignInComponent} from '@app/modules/sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule,
    SharedModule
  ],
  declarations: [
    SignInComponent
  ]
})
export class SignInModule { }
