import { Injectable } from '@angular/core';

/*
  Generated class for the PurchasesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PurchasesProvider {
  icons: string[];
  items: Array<{ title: string, 
                 note: string, 
                 icon: string, 
                 quantity: number, 
                 price: number }>;

  constructor() {
    console.log('Hello PurchasesProvider Provider');

    this.items = [];

    // Let's populate this page with some filler content for funzies
    this.icons = ['stats', 'pricetags', 'clipboard'];

    // For MVP we will host the items separatley for each list
    // Once we are fully functional then we will consolidate the code 

    this.items.push({
      title: 'Batman Glass',
      note: 'Goodwill',
      icon: this.icons[0],
      quantity: 3,
      price: 0.75
    });

    this.items.push({
      title: 'DVDs',
      note: 'Garage Sale',
      icon: this.icons[1],
      quantity: 20,
      price: 8.50
    });
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1)
  }
}
