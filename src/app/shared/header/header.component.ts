import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  

  constructor(private sharedService: SharedService) {}

  emitClick(activateClass: string) {
    this.sharedService.emitButtonClick(activateClass);
  }


}
