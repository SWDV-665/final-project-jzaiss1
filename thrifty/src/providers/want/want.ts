import { Injectable } from '@angular/core';

/*
  Generated class for the WantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WantProvider {
  icons: string[];
  items: Array<{ title: string, 
                 note: string, 
                 icon: string, 
                 quantity: number, 
                 price: number }>;

  constructor() {
    console.log('Hello WantProvider Provider');

    this.items = [];

    // Let's populate this page with some filler content for funzies
    this.icons = ['stats', 'pricetags', 'clipboard'];

    // For MVP we will host the items separatley for each list
    // Once we are fully functional then we will consolidate the code 

    this.items.push({
      title: 'Video Games',
      note: 'only PS3',
      icon: this.icons[0],
      quantity: 10,
      price: 1.25
    });

    this.items.push({
      title: 'Home Decor',
      note: 'Farmhouse style',
      icon: this.icons[1],
      quantity: 5,
      price: 50.00
    });
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1)
  }
}