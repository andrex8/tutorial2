import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComentariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html',
})
export class ComentariosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  mostrarAlerta(){
    let mensaje = this.alertCtrl.create({
        title: 'Gracias',
        subTitle: '¡Tu comentario ha sido enviado, muchas gracias!',
        buttons: ['OK']
    });
    mensaje.present();
    //this.orderForm.reset();
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad ComentariosPage');
  }
}
