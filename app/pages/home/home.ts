import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {UserService} from './../../services/UserService';
import {ExtendedHttp} from './../../services/ExtendedHttp';
import {HeaderComponent} from './../../components/header/header';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [HeaderComponent]

})
export class HomePage {
  constructor(private navCtrl: NavController, private userService: UserService, private http: ExtendedHttp) {
    this.http = http;
  	this.userService = userService;
  }

  public test(e:Event) {
    e.preventDefault();
    this.userService.getCurrentUser().subscribe((x) => {
      x.printCurrentUser();
    });
  }

  public test2(e:Event) {
    console.log("test2");
    e.preventDefault();
    this.http.get('/api/instances').subscribe((res:any) => {
      console.log('2');
      console.log(res);
    });
    
  }
}