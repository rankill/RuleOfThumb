import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosingTimeComponent } from '@shared/components/closing-time/closing-time.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryApiService } from '@shared/services/in-memory/in-memory-api.service';
import { BannerComponent } from './components/banner/banner.component';
import { VotesContainerComponent } from './components/votes/votes-container/votes-container.component';
import { VotesItemComponent } from './components/votes/votes-item/votes-item.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ThumbsBarComponent } from './components/thumbs/thumbs-bar/thumbs-bar.component';
import { ThumbsActionComponent } from './components/thumbs/thumbs-action/thumbs-action.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // It needs to be removed when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryApiService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    ClosingTimeComponent,
    BannerComponent,
    VotesContainerComponent,
    VotesItemComponent,
    ComingSoonComponent,
    ThumbsBarComponent,
    ThumbsActionComponent
  ],
  exports: [
    ClosingTimeComponent,
    BannerComponent,
    FontAwesomeModule,
    VotesContainerComponent,
    VotesItemComponent,
    ComingSoonComponent,
    ThumbsBarComponent,
    ThumbsActionComponent
  ]
})
export class SharedModule { }
