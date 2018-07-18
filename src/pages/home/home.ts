import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { ToastController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

import { List } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
//import { DB } from '../../app/app.module';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(List) list: List;
  name: string = "Krishna";
  clickMessage: string = "this";
  public smsResponse: string;
  users: Observable<any[]>;

  constructor(public navCtrl: NavController, private smsVar: SMS,
    public toastCtrl: ToastController,
    afDB: AngularFireDatabase,
    public popoverCtrl: PopoverController,
    private storage: Storage) {
    var self = this;
    //this.isLoaded = false;
    this.users = afDB.list('users').valueChanges();
      console.log(this.users);
    // ref.on("value", function(snapshot) {
    //    self.refresh(snapshot.val());
    //    storage.set('users', snapshot.val());
    //    self.isLoaded = true;
    // }, function(errorObj) {
    //     self.isLoaded = false;
    //     storage.get('users').then((val) => {
    //       self.refresh(val);
    //     });
    // })  
  }
  sendSms(position, user) {        
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
              intent: ''  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    //debugger;   
    const toast = this.toastCtrl.create({
      message: 'Message was sent successfully',
      duration: 3000
    });
    
    this.smsVar.send(user.ph, user.message)
      .then(()=>{
        console.log("success");
      },()=>{
      console.log("failed");
      });  
    
    toast.present();
  }
  presentPopover(myEvent) {
    debugger
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
