import {Component} from '@angular/core';
import {NavController, Loading} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {HeaderComponent} from './../../components/header/header';
import {ExtendedHttp} from './../../services/ExtendedHttp';
//import {LegajoDetallePage} from './../legajo-detalle/legajo-detalle';
import {Detail} from './detail';

@Component({
	templateUrl: 'build/pages/legajos/legajos.html',
  directives: [HeaderComponent]
})

export class LegajoList {
  processes: any;
  public loading = Loading.create();

  constructor(public nav: NavController, private http: ExtendedHttp) {
    this.http = http;
    this.nav = nav;
    this.nav.present(this.loading);
    this.http.get('/api/instance').subscribe(
      res => {this.processes = res.json(); console.log(res.json())},
      err => console.log(err),
      () => {this.loading.dismiss()}
      );

  }

  legajoTapped(legajo) {
    this.loading = Loading.create();
    this.nav.present(this.loading);

    this.http.get('/api/instance/' + legajo.id).subscribe(
      res => {
        legajo.detail = res.json();
        this.nav.push(Detail, {
          legajo: legajo
        });
      },
      err => console.log(err),
      () => this.loading.dismiss()
      )
  }

  legajoTapped2(legajo) {
    this.nav.push(Detail, {
      legajo: legajo
    });
  }

}

