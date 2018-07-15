import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: string = "Krishna";
  clickMessage: string = "this";
  public smsResponse: string;
  users: any[] = [
    {
      user: "krish",
      ph: "6147875430"
    },
    {
      user: "krish2",
      ph: "5102798255"
    }
  ];
  constructor(public navCtrl: NavController, private smsVar: SMS,public toastCtrl: ToastController) {

  }
  sendSms(position, type) {        
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
              intent: ''  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    //debugger;
    var messages = {
      "alert": 'Alert! login and look into the bugs',
      "warning": 'Warning! It doesn\'t seems like an emergency, but better to look into the issue',
      "emergency": 'Emergency! hurry up',
      "success": 'Success! the deployment went good'
    };

    const toast = this.toastCtrl.create({
      message: 'Message was sent successfully',
      duration: 3000
    });
    for(var i = 0, ulength = this.users.length; i < ulength ; i++) {
      this.smsVar.send(this.users[i]["ph"], messages[type], options)
        .then(()=>{
          console.log("success");
        },()=>{
        console.log("failed");
        });  
    }

    toast.present();
  }
}
