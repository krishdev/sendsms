import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SMS } from '@ionic-native/sms';
import firebase from 'firebase';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PopoverPage } from '../pages/popover/popover';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseconfig = {
  apiKey: "AIzaSyDJNzRNPHAX21u-rjy7pqS3Tv6arFf3EME",
  authDomain: "sendsms-55b02.firebaseapp.com",
  databaseURL: "https://sendsms-55b02.firebaseio.com",
  projectId: "sendsms-55b02",
  storageBucket: "sendsms-55b02.appspot.com",
  messagingSenderId: "1070525234045"
};

//firebase.initializeApp(firebaseconfig);

debugger;
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen, SMS,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

// export const DB = firebase.database()
// export const auth = firebase.auth()