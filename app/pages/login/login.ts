import {Component} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {NavController} from 'ionic-angular';

import {LoginValidator} from './validators/loginValidator';
import {UserService} from './../../services/UserService';

import {TabsPage} from './../tabs/tabs';

@Component({
	templateUrl: 'build/pages/login/login.html',
	directives: [FORM_DIRECTIVES]
})
export class LoginPage {
	authForm: ControlGroup;
	username: AbstractControl;
	password: AbstractControl;


	constructor(private userService: UserService, private fb: FormBuilder, private nav: NavController){
		this.userService = userService;
		this.nav = nav;

		this.authForm = fb.group({  
			'username': ['', Validators.compose([Validators.required, Validators.minLength(7), LoginValidator.checkFirstCharacterValidator])],
			'password': ['', Validators.compose([Validators.required, Validators.minLength(7)])]
		});
		this.username = this.authForm.controls['username'];
		this.password = this.authForm.controls['password'];
	}

	submit(event:Event) {
		event.preventDefault();
		this.userService.authenticate(this.username.value, this.password.value)
		.subscribe((success) => {
			console.log(success);
			if (success) this.nav.push(TabsPage);
		},
		(alert:any) => {
			console.log(alert);
			this.nav.present(alert);
		});
	}
}