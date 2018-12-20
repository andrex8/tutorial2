import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDataBaseModule } from 'angularfire2/database';

//Plugins
import { Facebook } from '@ionic-native/facebook';
import { Screenshot } from '@ionic-native/screenshot';

//Importacion de pages
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
//import { RegistroPage } from '../pages/registro/registro';
import { LoginPage } from '../pages/login/login';
import { ComentariosPage } from '../pages/comentarios/comentarios';
import { AcercadePage } from '../pages/acercade/acercade';
import { SplashPage } from '../pages/splash/splash';

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyBbz988D87waHrgOCpzJIEWfyV_Ihqoxtk",
   authDomain: "ionic-e4e53.firebaseapp.com",
   databaseURL: "https://ionic-e4e53.firebaseio.com",
   projectId: "ionic-e4e53",
   storageBucket: "ionic-e4e53.appspot.com",
   messagingSenderId: "671722221723"
 };

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    ComentariosPage,
    AcercadePage,
    SplashPage,
  //  RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    ComentariosPage,
    AcercadePage,
  //  RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    Screenshot
  ]
})
export class AppModule {}
