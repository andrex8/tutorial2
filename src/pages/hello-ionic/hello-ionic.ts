import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
//import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  screen:any;
  state: boolean = false;
  constructor(public alertCtrl: AlertController, private screenshot: Screenshot) {
  }
  //Función para mostrar una alerta
  showAlert(){
    let alert = this.alertCtrl.create({
      title:'Código de promoción',
      subTitle: 'Tu código de promoción es: aeX48d2tu89',
      buttons: ['OK']
    });
    alert.present();
  }

  //Funcion de reset para ocultar el screenshot despues de 1 segundo
  reset(){
  var self = this;
  setTimeout(function(){
    self.state = false;
    }, 1000);
  }
  //Función del Screenshot
  screenShot(){
  this.screenshot.save('jpg', 80, 'codigo.jpg').then(res => {
    this.screen = res.filePath;
    this.state = true;
    this.reset();
  });
  }

  screenShotURI() {
    this.screenshot.URI(80).then(res => {
      this.screen = res.URI;
      this.state = true;
      this.reset();
    });
  }
}
