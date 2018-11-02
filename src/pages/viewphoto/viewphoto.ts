import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-viewphoto',
  templateUrl: 'viewphoto.html',
})
export class ViewphotoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewphotoPage');
  }

  cartPage() {
  	this.navCtrl.push(CartPage);
  }


}
