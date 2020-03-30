import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import {HowItWorksComponent} from '@app/modules/how-it-works/how-it-works.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/how-it-works', pathMatch: 'full' },
    { path: 'how-it-works', component: HowItWorksComponent, data: { title: 'How it works' } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HowItWorksRoutingModule { }
