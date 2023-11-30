import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public showHeader : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

<<<<<<< HEAD
  public changeShowSidebar(show : boolean) {
=======
  public changeShowHeader(show : boolean) {
>>>>>>> main
    this.showHeader.next(show);
  }
  constructor() { }
}
