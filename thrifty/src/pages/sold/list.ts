import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SalesProvider } from '../../providers/sales/sales';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class SoldPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ToastController: ToastController,
              public salesData: SalesProvider) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  loadItems() {
    return this.salesData.getItems();
  }

  removeItem(item, index) {
    console.log("Removing item - ", item, index);

    const toast = this.ToastController.create({
      message: 'Removing Item - ' + item.title + " ...",
      duration: 3000
    });
    toast.present();
    this.salesData.removeItem(index);
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SoldPage, {
      item: item
    });
  }
}
