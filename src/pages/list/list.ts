import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
//import { DomSanitizationService} from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

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
  mapas: string[];
  telefono: string[];
  puntos: Array<{nombre:string, ubicacion:string, horario: string, imagenes: string, mapas, telefono: string}>;
  items: Array<{title: string, ubicacion: string, icon: string, mensaje: string, titulos: string, tiendas: string, cafeterias: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _sanitizationService: DomSanitizer) {

    this.imagenes = [
      /*Imagen de minerva */'../assets/imgs/minerva.jpg',
      /*Imagen de minerva */'../assets/imgs/minerva.jpg',
      /*Siguientes imagens.. */ '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '../assets/imgs/minerva.jpg'
    ];

    this.telefono = [
      '77652505',
      '77652505',
      '77652505',
      '77652505',
      '77652505',
      '77652505',
      '77652505',
      '77652505',
      '77652505',
      '77652505',
      '77652505',

    ];

    this.mapas = [
      /* Almolonga */ ' ',
      /* Baul */ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.8964144251274!2d-91.50430088938903!3d14.836329479374202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab354d80cfc408e9!2sXelapan!5e0!3m2!1ses-419!2sgt!4v1524245074926',
      /*Calvario */ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.179504528266!2d-91.5239629924766!3d14.8357977565568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f8bf0f4994c34c!2sXelapan+Calvario!5e0!3m2!1ses-419!2sgt!4v1524245187376',
      /*Correos */ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.8129168516134!2d-91.52275168255618!3d14.835754300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858ebd55f3da4461%3A0x3442417774d9c5ec!2sXelapan+Correos!5e0!3m2!1ses-419!2sgt!4v1524244954297',
      /* Demo */ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.09172283532996!2d-91.52066630966907!3d14.840191887461824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefcfc26be38ff114!2sAlimentos+Xelapan+S.A.+La+Democracia!5e0!3m2!1ses-419!2sgt!4v1524245296690',
      /*Delco */ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d681.7434439406197!2d-91.53675312395002!3d14.851988881502349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c58bee5f7f0f498!2sXelapan!5e0!3m2!1ses-419!2sgt!4v1524245369052',
      /*Escala */ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405.38205903245444!2d-91.515513752123!3d14.84400135313523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x30161c55a58ece60!2sXelapan!5e0!3m2!1ses-419!2sgt!4v1524245481566',
      /* Esperanza */ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15425.224841690608!2d-91.55817413297251!3d14.86414635008635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe94d5e34b727113d!2sXelapan+La+Esperanza!5e0!3m2!1ses-419!2sgt!4v1524245668405',
      /*Eureka */ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1621.5297827984248!2d-91.51806998801625!3d14.843795148629532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabe8c7edfc4aae82!2sXelap%C3%A1n+Eureka!5e0!3m2!1ses-419!2sgt!4v1524245721437',
      /*Los altos*/ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.1529042833064!2d-91.52324039944021!3d14.847039989334231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd7e6ca6547a9799!2sXelapan!5e0!3m2!1ses-419!2sgt!4v1524246030468',
      /*Minerva */ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.760315643574!2d-91.52703144496785!3d14.845015203046078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9580904e43020cc2!2sXelapan!5e0!3m2!1ses-419!2sgt!4v1524246086779',
      /*Nuevo leon*/ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.132521896456!2d-91.53213074311229!3d14.83940600053816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf569e40e65cdaf6e!2sXelapan+Nuevo+Leon!5e0!3m2!1ses-419!2sgt!4v1524246419800',
      /*Parque */ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1180.2447912296082!2d-91.51943500801855!3d14.834211004729132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb1a0767d4e4b42f!2sXelapan!5e0!3m2!1ses-419!2sgt!4v1524246481144',
      /*Salcaja */ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30849.35397745948!2d-91.48573123199733!3d14.871811652334133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb1a0767d4e4b42f!2sXelapan!5e0!3m2!1ses-419!2sgt!4v1524246655831',
      /*Tecun*/ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928.2051847966766!2d-91.52063182799706!3d14.858314377086327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadba1936d335f11b!2sXelapan!5e0!3m2!1ses-419!2sgt!4v1524246770782',
      /*Tinajon*/ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.1009992278705!2d-91.53363667934288!3d14.852127699014998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d4773924a1582db!2sXelapan+Tinajon!5e0!3m2!1ses-419!2sgt!4v1524246820702',
      /*Trigales*/ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18344.345302434296!2d-91.54076512682428!3d14.857576163930114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca97e4b596c99798!2sXelapan+Los+Trigales!5e0!3m2!1ses-419!2sgt!4v1524246864212'
    ];

    this.ubicacion=[
      'Calle Real 2-87 Zona 4 Almolonga Quetzaltenango     --Horario: De 6:00 AM A 9:00 PM',
      '5 avenida 2-11 zona 5 Colonia del Empleado Municipal Quetaltenango',
      '4 calle 19-02 Zona 1 Quetzaltenango',
      '15 Avenida Locales B Y C 3-86 Zona 1 Quetzaltenango',
      'Calle Rodolfo Robles 15-36 Zona 3 Quetzaltenango',
      'Avenida las Americas 9-50 zona 3 locales 11-15 Super Centro Comercial Delco S.A. Quetzaltenango',
      '13 avenida local 1, plaza Escala 4-50 Zona 3 Quetaltenango',
      '1era calle 5-58 Zona 1 La Esperanza, Quetzaltenango',
      '4ta calle 14-12 Zona 3 Quetzaltenango',
      '19 avenida 6-60 Zona 3 Quetzaltenango',
      '4 a calle 22-35 zona 3 Quetzaltenango',
      '4ta calle 25-92 Zona 1 Barrio Nuevo León Quetzaltenango',
      '12 avenida 5-44 zona 1 Quetzaltenango',
      '3 avenida 3-40 Zona 1 Salcaja, Quetzaltenango.',
      '9 calle 26-15 Zona 7 Quetzaltenango',
      'Diagonal 2 27-62 Zona 3 Quetzaltenango',
      '29 Avenida 13-88 zona 7 Colonia Los Trigales Quetzaltenango'
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
        imagenes: this.imagenes[i],
        mapas: this._sanitizationService.bypassSecurityTrustResourceUrl(this.mapas[i]),
        telefono: this.telefono[i]
      });
    }
  }



  itemTapped(event, punto) {
    this.navCtrl.push(ItemDetailsPage, {
      punto: punto
    });
  }
}
