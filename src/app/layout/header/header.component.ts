import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../user.service';
import { NavigationMenuService } from '../navigation-menu/navigation-menu.service';

@Component({
  selector: 'tsk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedInUser: User = null;
  toggleActive:boolean = false;
  
    
  constructor(private userService: UserService,private sidenav: NavigationMenuService) { }
  

	
  ngOnInit() {
    this.userService.getCurrentUser()
    .subscribe(user => {
      this.loggedInUser = user;
    });
  }

  toggleNavigationMenu() {
		this.toggleActive = !this.toggleActive;
		this.sidenav.toggle();

    console.log('Clicked');
	}

}
