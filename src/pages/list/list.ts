import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  tiendas: string[];
  cafeterias: string[];
  puntos: Array<{nombre:string, ubicacion:string, horario: string}>;
  items: Array<{title: string, note: string, icon: string, mensaje: string, titulos: string, tiendas: string, cafeterias: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //Aqui van las tiendas que se cargan dinamicamente con un ciclo for
    this.tiendas=[
        'Democracia',
        'Almolonga'
    ];

    this.cafeterias=[
      'Minerva',
      'Salcaja',
      'Parque Central',
      'Esperanza',
      'Nuevo Leon',
      'Tecun',
      'Democracia',
      'Almolonga'
    ];

    this.puntos=[];
    for(let i=1; i<8; i++){
      this.puntos.push({
        nombre: this.cafeterias[i],
        ubicacion: 'as',
        horario: 'as'
      });
    }
  }

  itemTapped(event, punto) {
    this.navCtrl.push(ItemDetailsPage, {
      item: punto
    });
  }
}
