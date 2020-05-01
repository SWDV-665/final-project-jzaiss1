import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PurchasesProvider } from '../../providers/purchases/purchases';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class PurchasedPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ToastController: ToastController,
              public alertCtrl: AlertController,
              public purchaseData: PurchasesProvider) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  loadItems() {
    return this.purchaseData.getItems();
  }

  removeItem(item, index) {
    console.log("Removing item - ", item, index);

    const toast = this.ToastController.create({
      message: 'Removing Item - ' + item.title + " ...",
      duration: 3000
    });
    toast.present();
    this.purchaseData.removeItem(index);
  }

  addItem() {

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PurchasedPage, {
      item: item
    });
  }
}
