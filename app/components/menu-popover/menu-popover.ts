import {Component} from '@angular/core';
import {ViewController, Popover} from 'ionic-angular';

import {LoginPage} from './../../pages/login/login';
import {UserService} from './../../services/UserService';
import {NavController} from 'ionic-angular';


@Component({
	templateUrl: 'build/components/menu-popover/menu-popover.html'
})
export class PopoverPage {
	constructor(private viewCtrl: ViewController, private userService: UserService, public nav: NavController) {
		this.userService = userService;
	}

	logout() {
		this.userService.logout();
		this.viewCtrl.dismiss();
		this.nav.setRoot(LoginPage);
	}
}