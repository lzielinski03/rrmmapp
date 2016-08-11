import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {UserService} from './../../services/UserService';
import {ExtendedHttp} from './../../services/ExtendedHttp';
import {HeaderComponent} from './../../components/header/header';
import {LoginPage} from './../login/login';

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
    e.preventDefault();
    console.log("test2");
    this.http.get('/api/instances').subscribe((res:any) => {
      console.log('2');
      console.log(res);
    }, (err)=> {
      console.log('here yes');
      console.log(err);
      if (err.status == 403){
        this.navCtrl.setRoot(LoginPage)
      }
    });
    
  }
}