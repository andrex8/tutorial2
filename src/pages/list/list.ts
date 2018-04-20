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
  ubicacion: string[];
  imagenes: string[];
  coordenadas: string[];
  puntos: Array<{nombre:string, ubicacion:string, horario: string, imagenes: string}>;
  items: Array<{title: string, ubicacion: string, icon: string, mensaje: string, titulos: string, tiendas: string, cafeterias: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //Aqui van las tiendas que se cargan dinamicamente con un ciclo for
    this.tiendas=[
        'Democracia',
        'Almolonga'
    ];
    this.imagenes = [
      /*Imagen de minerva */'../assets/imgs/minerva.jpg'
    ]

    this.ubicacion=[
      'Direccion Almolonga',
      'Baúl',
      'Calvario',
      'Correos',
      'Democracia',
      'Delco',
      'Escala',
      'Esperanza',
      'Eureka',
      'Los Altos',
      'Minerva',
      'Nuevo León',
      'Parque Central',
      'Salcaja',
      'Tecún',
      'Tinajon',
      'Trigales'
    ];

    this.cafeterias=[ //17 tiendas
      'Almolonga',
      'Baúl',
      'Calvario',
      'Correos',
      'Democracia',
      'Delco',
      'Escala',
      'Esperanza',
      'Eureka',
      'Los Altos',
      'Minerva',
      'Nuevo León',
      'Parque Central',
      'Salcaja',
      'Tecún',
      'Tinajon',
      'Trigales'
    ];

    this.puntos=[];
    for(let i=0 ; i<17; i++){
      this.puntos.push({
        nombre: this.cafeterias[i],
        ubicacion: this.ubicacion[i],
        horario: 'as',
        imagenes: this.imagenes[i]
      });
    }
  }

  itemTapped(event, punto) {
    this.navCtrl.push(ItemDetailsPage, {
      punto: punto
    });
  }
}
