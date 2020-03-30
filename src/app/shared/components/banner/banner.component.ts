import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger(
      'leaveAnimation',
      [
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('500ms ease',
              style({height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class BannerComponent implements OnInit {
  @Input() id = `banner_${Math.floor((Math.random() * 6) + 1)}`;
  @Input() title: string;
  @Input() message: string;
  @Input() showBanner = true;

  constructor() { }

  ngOnInit(): void {}

  closeBanner() {
    this.showBanner = false;
  }
}
