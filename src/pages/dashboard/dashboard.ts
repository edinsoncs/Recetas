import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ViewPost } from '../viewpost/viewpost';



@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  viewPost() {

  	this.navCtrl.push(ViewPost);

  }

}
