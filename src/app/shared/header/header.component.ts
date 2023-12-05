import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from '../shared.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  declare public user: User;
  authStatus$ = this.userService.authStatus$;
  user$ = this.userService.user$;
  constructor(private sharedService: SharedService, private userService: UserService, private router:Router) {
    this.user = userService.user;
  }

  emitClick(activateClass: string) {
    this.sharedService.emitButtonClick(activateClass);
  }

  logout(){
    this.userService.logout()
    this.userService.setAuthStatus(false)
    this.userService.setUser(null)
  }

  toHomePage(){
    this.router.navigateByUrl('/Home')
  }
  


}
