import {Component, HostListener, OnInit} from '@angular/core';
import {NavbarStateService} from '@shared/services/navbar-state/navbar-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public solidNavbar = false;
  public isNavbarOpen = false;
  public lockScroll = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.lockScroll) {
      this.solidNavbar = window.pageYOffset > 300;
    }
  }

  constructor(private navbarService: NavbarStateService) {
    this.navbarService.isSolidNavbar.subscribe(state => {
      this.solidNavbar = state;
      this.lockScroll = this.solidNavbar;
    });
  }

  ngOnInit() { }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
