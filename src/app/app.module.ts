import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DBConfig, NgxIndexedDBModule} from 'ngx-indexed-db';


// Modules
import {SharedModule} from '@shared/shared.module';
import {ShellModule} from '@app/shell/shell.module';
import {HomeModule} from '@app/modules/home/home.module';
import {HowItWorksModule} from '@app/modules/how-it-works/how-it-works.module';
import {PastTrialsModule} from '@app/modules/past-trials/past-trials.module';
import {SignInModule} from '@app/modules/sign-in/sign-in.module';


const dbConfig: DBConfig  = {
  name: 'PostDB',
  version: 1,
  objectStoresMeta: [{
    store: 'posts_voted',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'id', keypath: 'id', options: { unique: true } },
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'voteDescription', keypath: 'voteDescription', options: { unique: false } },
      { name: 'isMain', keypath: 'isMain', options: { unique: false } },
      { name: 'expireDate', keypath: 'expireDate', options: { unique: false } },
      { name: 'createdDate', keypath: 'createdDate', options: { unique: false } },
      { name: 'media', keypath: 'media', options: { unique: false } },
      { name: 'wikiPath', keypath: 'wikiPath', options: { unique: false } },
      { name: 'categoryName', keypath: 'categoryName', options: { unique: false } },
      { name: 'thumbs', keypath: 'thumbs', options: { unique: false } },
    ]
  }]
};

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
    BrowserAnimationsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
