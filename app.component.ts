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
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  laptopList = signal(LAPTOP_LIST);
  
  size(laptop: Laptop) {
    if (laptop.number < 2) {
      return '1 CD vendu entre 50 Euros et 60 Euros';
    }

    if (laptop.number > 2) {
      return '3 ou plusieurs CD vendus à plus de 150 Euros';
    }

    return '2 CD vendus entre 100 Euros et 120 Euros'
  }

  incrementLife(laptop: Laptop) {
    laptop.number = laptop.number + 1;
  }

  decrementLife(laptop: Laptop) {
    laptop.number = laptop.number - 1;
  }
}