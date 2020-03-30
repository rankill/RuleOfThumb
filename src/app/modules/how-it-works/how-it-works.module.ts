import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule} from '@shared/shared.module';
import {HowItWorksRoutingModule} from '@app/modules/how-it-works/how-it-works.routing.module';
import {HowItWorksComponent} from '@app/modules/how-it-works/how-it-works.component';

@NgModule({
  imports: [
    CommonModule,
    HowItWorksRoutingModule,
    SharedModule
  ],
  declarations: [
    HowItWorksComponent
  ]
})
export class HowItWorksModule { }
