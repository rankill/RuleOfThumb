import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavbarStateService} from '@shared/services/navbar-state/navbar-state.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  isNavbarSolid = false;

  constructor(private router: Router, private navbarService: NavbarStateService) {
    this.isNavbarSolid = this.router.url !== '/';
    navbarService.updateSolidNavbar(this.isNavbarSolid );
  }

  ngOnInit() { }

}
