import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WantPage } from '../pages/want/list';
import { PurchasedPage } from '../pages/purchased/list';
import { SoldPage } from '../pages/sold/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PurchasesProvider } from '../providers/purchases/purchases';
import { SalesProvider } from '../providers/sales/sales';
import { WantProvider } from '../providers/want/want';
import { InputServiceProvider } from '../providers/input-service/input-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WantPage,
    PurchasedPage,
    SoldPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WantPage,
    PurchasedPage,
    SoldPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PurchasesProvider,
    SalesProvider,
    WantProvider,
    InputServiceProvider
  ]
})
export class AppModule {}
