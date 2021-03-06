import {Component} from '@angular/core';
import {NavController, Loading} from 'ionic-angular';
import {HeaderComponent} from './../../components/header/header';
import {LegajoDetallePage} from './../legajo-detalle/legajo-detalle';
import {ExtendedHttp} from './../../services/ExtendedHttp';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Component({
	templateUrl: 'build/pages/legajos/legajo-list.html',
  directives: [HeaderComponent]
})

export class LegajoList {
  processes: any;
  public loading = Loading.create();

  constructor(public nav: NavController, private http: ExtendedHttp) {
    this.http = http;
    this.nav = nav;
    this.nav.present(this.loading);
    this.http.get('/api/instances').subscribe(
      res => {this.processes = res.json(); console.log(res.json())},
      err => console.log(err),
      () => {this.loading.dismiss()}
      );

  }

  legajoTapped(legajo) {
    this.nav.push(LegajoDetallePage, {
      legajo: legajo
    });
  }

}

