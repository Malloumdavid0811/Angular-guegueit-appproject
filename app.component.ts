import { Component, computed, signal } from '@angular/core';
import { PRODUIT_LIST } from './produit-list';
import { Produit } from './produit.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  produitList = signal(PRODUIT_LIST);
  
  size(produit: Produit) {
    if (produit.number < 2) {
      return '1 produit vendu entre 3000 Francs et 5000 Francs';
    }

    if (produit.number > 2) {
      return '3 ou plusieurs produits vendus à plus de 12000 Francs';
    }

    return '2 produits vendus entre 6000 Francs et 10000 Francs'
  }

  incrementLife(produit: Produit) {
    produit.number = produit.number + 1;
  }

  decrementLife(produit: Produit) {
    produit.number = produit.number - 1;
  }
}
