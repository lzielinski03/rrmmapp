import {Page, NavController, NavParams} from 'ionic-angular';
//import {Legajo} from './../legajos/legajo-list';
/*
  Generated class for the LegajoDetallePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/legajos/detail.html',
})
export class Detail {
  legajo: any;
  constructor(public nav: NavController, params: NavParams) {
    this.legajo = params.get('legajo');
    console.log('details');
    console.log(this.legajo);
  }
}