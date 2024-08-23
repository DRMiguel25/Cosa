import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import 'moment/locale/es';  // Importa el paquete de idioma español

@Component({
  selector: 'app-lista-de-productos',
  templateUrl: './Lista_De_Productos.component.html',
  styleUrls: ['./Lista_De_Productos.component.css']
})
export class ProductListComponent implements OnInit {
  
  products = [
    {
      nombre: 'Samsung s24 ultra',
      descripcion: 'último modelo con cámara de alta resolución',
      precio: 20999.00,
      releaseDate: new Date('2023-08-15')
    },
    {
      nombre: 'Laptop Thinkpad X1 Extreme',
      descripcion: 'portátil ligero y potente para profesionales',
      precio: 98050.00,
      releaseDate: new Date('2023-07-01')
    },
    {
      nombre: 'Auriculares sony wh-1000xm5',
      descripcion: 'auriculares con cancelación de ruido premium',
      precio: 6798.99,
      releaseDate: new Date('2023-09-30')
    }
  ];

  inputDate: string = '2023-07-31';
  formatString: string = 'DD/MM/YYYY';
  subtractDays: number = 0;
  addHours: number = 0;
  diffStartDate: string = '';
  diffEndDate: string = '';
  beforeAfterDate: string = '';

  ngOnInit() {
    moment.locale('es');  
  }
}
