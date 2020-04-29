import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class SoldPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string, quantity: number, price: number }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

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

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SoldPage, {
      item: item
    });
  }
}
