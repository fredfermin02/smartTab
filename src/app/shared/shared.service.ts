import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private buttonClickSource = new Subject<void>();
  public popupToShow: string = '';
  buttonClick$ = this.buttonClickSource.asObservable();
  

  emitButtonClick(activateClass: string) {
    this.popupToShow= activateClass;
    
    this.buttonClickSource.next();
  }

}
