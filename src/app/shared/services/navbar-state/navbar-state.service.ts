import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarStateService {
  private $solidNavbarSource = new BehaviorSubject<boolean>(false);
  isSolidNavbar: Observable<boolean> = this.$solidNavbarSource.asObservable();

  constructor() { }

  updateSolidNavbar(isSolid: boolean) {
    this.$solidNavbarSource.next(isSolid);
  }
}
