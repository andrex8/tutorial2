import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

//Se importan las paginas
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ComentariosPage } from '../pages/comentarios/comentarios';
import { AcercadePage } from '../pages/acercade/acercade';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
    ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Inicio', component: HelloIonicPage, icon: "home"},
      { title: 'Puntos de venta', component: ListPage, icon:"basket"},
      { title: 'Comentarios', component: ComentariosPage, icon:"chatbubbles"},
      { title: 'Acerca De', component:AcercadePage, icon:"information-circle"},
      { title: 'Salir', component: LoginPage, icon:"close-circle"}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
  // close the menu when clicking a link from the menu
  this.menu.close();
  // navigate to the new page if it is not the current page
  this.nav.setRoot(page.component);
}

}
