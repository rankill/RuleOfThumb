import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule} from '@shared/shared.module';
import {PastTrialsComponent} from '@app/modules/past-trials/past-trials.component';
import {PastTrialsRoutingModule} from '@app/modules/past-trials/past-trials-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PastTrialsRoutingModule,
    SharedModule
  ],
  declarations: [
    PastTrialsComponent
  ]
})
export class PastTrialsModule { }
