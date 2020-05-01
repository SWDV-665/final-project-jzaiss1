import { Injectable } from '@angular/core';

/*
  Generated class for the SalesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SalesProvider {
  icons: string[];
  items: Array<{ title: string, 
                 note: string, 
                 icon: string, 
                 quantity: number, 
                 price: number }>;

  constructor() {
    console.log('Hello SalesProvider Provider');

    this.items = [];

    // Let's populate this page with some filler content for funzies
    this.icons = ['stats', 'pricetags', 'clipboard'];

    // For MVP we will host the items separatley for each list
    // Once we are fully functional then we will consolidate the code 

    this.items.push({
      title: 'Milk Pitcher',
      note: 'Flea Market',
      icon: this.icons[0],
      quantity: 1,
      price: 14.50
    });

    this.items.push({
      title: 'Framed Picture',
      note: 'eBay',
      icon: this.icons[1],
      quantity: 1,
      price: 33.75
    });
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1)
  }
}
