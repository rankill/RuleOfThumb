import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterModule} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ShellComponent } from '@app/shell/shell.component';
import { FooterComponent } from './footer/footer.component';
import {SharedModule} from '@shared/shared.module';
import {Shell} from '@app/shell/shell.service';
import {Title} from '@angular/platform-browser';
import {filter, map} from 'rxjs/operators';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShellComponent,
  ],
  providers: [
    Shell
  ]
})
export class ShellModule {

  private appName = 'Rule Of Thumb';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    // Logic to update angular title with route data: {title: [title_value]}
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data.title) {
            return child.snapshot.data.title;
          } else {
            return null;
          }
        }
        return null;
      })
    ).subscribe( (data: any) => {
      if (data) {
        this.titleService.setTitle(`${data} - ${this.appName}`);
      }
    });
  }
}
