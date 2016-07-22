import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {UserService} from './../../services/UserService';
import {HeaderComponent} from './../../components/header/header';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [HeaderComponent]

})
export class HomePage {
  constructor(private navCtrl: NavController, private userService: UserService) {
  	this.userService = userService;
  }

  public test(e:Event) {
  	e.preventDefault();
  	this.userService.getCurrentUser().subscribe((x) => {
  		x.printCurrentUser();
  	});
  }
}
