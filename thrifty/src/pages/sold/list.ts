import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SalesProvider } from '../../providers/sales/sales';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class SoldPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string, quantity: number, price: number }>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public salesData: SalesProvider) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  loadItems() {
    return this.salesData.getItems();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SoldPage, {
      item: item
    });
  }
}
