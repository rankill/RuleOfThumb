import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Modules
import {SharedModule} from '@shared/shared.module';
import {ShellModule} from '@app/shell/shell.module';
import {HomeModule} from '@app/modules/home/home.module';
import {HowItWorksModule} from '@app/modules/how-it-works/how-it-works.module';
import {PastTrialsModule} from '@app/modules/past-trials/past-trials.module';
import {SignInModule} from '@app/modules/sign-in/sign-in.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShellModule,
    HomeModule,
    HowItWorksModule,
    PastTrialsModule,
    SignInModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
