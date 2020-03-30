import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-closing-time',
  templateUrl: './closing-time.component.html',
  styleUrls: ['./closing-time.component.scss']
})
export class ClosingTimeComponent implements OnInit {

  @Input() expireDate: string;

  public daysAmount: number;

  constructor() { }

  ngOnInit(): void {
    const today = moment();
    const expireDate = moment(this.expireDate);

    this.daysAmount = expireDate.diff(today, 'days') || 0;
  }
}
