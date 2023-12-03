import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from '../shared.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  declare public user: User;
  declare public authStatus:boolean;

  constructor(private sharedService: SharedService, private userService: UserService) {
    this.user = userService.user;
    this.authStatus=userService.status;
  }

  emitClick(activateClass: string) {
    this.sharedService.emitButtonClick(activateClass);
  }

  


}
