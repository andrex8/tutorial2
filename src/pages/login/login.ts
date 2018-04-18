import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { Facebook } from '@ionic-native/facebook';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isLoggedIn:boolean = false;
  users: any;
  constructor(private fb: Facebook, public navCtrl: NavController, public loadingCtrl: LoadingController) {
  fb.getLoginStatus()
    .then(res => {
      console.log(res.status);
      if(res.status === "connect") {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log(e));
  }
  //Metodo de login
  login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error al conectarse con Facebook', e));
  }

  //Metodo para salir
  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error al salir de Facebook', e));
  }

  getUserDetail(userid) {
  this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
    .then(res => {
      console.log(res);
      this.users = res;
    })
    .catch(e => {
      console.log(e);
    });
  }

 itemTapped() {
    this.navCtrl.setRoot(HelloIonicPage,{}, {animate:true, direction:'forward'});

  }

  loader(){
    let loader = this.loadingCtrl.create({
      content: "Validando",
      duration:1000
    });
    loader.present();
  }



}
