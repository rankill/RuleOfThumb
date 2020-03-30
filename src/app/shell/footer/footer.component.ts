import { Component, OnInit } from '@angular/core';
import {faFacebookSquare, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public faFacebook = faFacebookSquare;
  public faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
