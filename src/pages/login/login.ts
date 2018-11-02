import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
//import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  home() {

  	this.navCtrl.push(HomePage);
  
  }

  dashboard() {

  	//this.navCtrl.push(DashboardPage);

  }

}
