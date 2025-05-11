import { Component, computed, signal } from '@angular/core';
import { LAPTOP_LIST } from './laptop-list';
import { Laptop } from './laptop.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  laptopList = signal(LAPTOP_LIST);
  
  size(laptop: Laptop) {
    if (laptop.number < 2) {
      return '1 produit vendu entre 3000 Francs et 5000 Francs';
    }

    if (laptop.number > 2) {
      return '3 ou plusieurs produits vendus à plus de 12000 Francs';
    }

    return '2 produits vendus entre 6000 Francs et 10000 Francs'
  }

  incrementLife(laptop: Laptop) {
    laptop.number = laptop.number + 1;
  }

  decrementLife(laptop: Laptop) {
    laptop.number = laptop.number - 1;
  }
}