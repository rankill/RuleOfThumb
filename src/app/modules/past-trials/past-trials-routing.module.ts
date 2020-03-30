import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import {PastTrialsComponent} from '@app/modules/past-trials/past-trials.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/past-trials', pathMatch: 'full' },
    { path: 'past-trials', component: PastTrialsComponent, data: { title: 'Past Trials' } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PastTrialsRoutingModule { }
