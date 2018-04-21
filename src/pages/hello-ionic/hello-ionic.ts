import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public alertCtrl: AlertController) {

  }
  showAlert(){
    let alert = this.alertCtrl.create({
      title:'Código de promoción',
      subTitle: 'Tu código de promoción es: aeX48d2tu89',
      buttons: ['OK']
    });
    alert.present();
  }
}
