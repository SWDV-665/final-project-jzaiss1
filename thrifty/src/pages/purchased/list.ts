import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PurchasesProvider } from '../../providers/purchases/purchases';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class PurchasedPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public purchaseData: PurchasesProvider) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  loadItems() {
    return this.purchaseData.getItems();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PurchasedPage, {
      item: item
    });
  }
}
