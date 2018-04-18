import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string, mensaje: string, titulos: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  /*  this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];


    this.items =[];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        titulos: i,
        note: 'This is item #' + i,
        mensaje: 'Este es un mensaje enviado desde List',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/

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
      'Tecun'
    ]
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
