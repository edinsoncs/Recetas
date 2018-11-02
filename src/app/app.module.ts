import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ViewpostPage } from '../pages/viewpost/viewpost';
import { ProfilePage } from '../pages/profile/profile';
import { ViewphotoPage } from '../pages/viewphoto/viewphoto';
import { CartPage } from '../pages/cart/cart';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    RegisterPage,
    LoginPage,
    ViewpostPage,
    ProfilePage,
    ViewphotoPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    RegisterPage,
    LoginPage,
    ViewpostPage,
    ProfilePage,
    ViewphotoPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
