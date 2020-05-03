import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SalesProvider } from '../../providers/sales/sales';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InputServiceProvider } from '../../providers/input-service/input-service';
import { SocialSharing } from '@ionic-native/social-sharing';

// This component implements a dedicated data provider named sales and
// a shared provider named input-service

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class SoldPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ToastController: ToastController,
              public alertCtrl: AlertController,
              public inputService: InputServiceProvider,
              public salesData: SalesProvider,
              public socialSharing: SocialSharing) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  // Here we're using a dedicated provider to get the items for items sold
  // This will permit us to integrate with a POS API in the future

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

  editItem(item, index) {
    console.log("Editing item - ", item, index);

    const toast = this.ToastController.create({
      message: 'Editing Item - ' + item.title + " ...",
      duration: 3000
    });
    toast.present();
    this.inputService.itemPromptSales(item, index);
  }

  addItem() {
    console.log("Adding Item");
    this.inputService.itemPromptSales();
  }

  textItem(item, index) {
    console.log("Sending item via SMS - ", item, index);

    const toast = this.ToastController.create({
      message: 'Sending Item - ' + item.title + " ....",
      duration: 3000
    });
    toast.present();

    let message = "Look what I sold " + item.title + " at the " + item.note + " for $ " + item.price

    // Share via SMS
    this.socialSharing.shareViaSMS(message, '123456789').then(() => {
    // Success!
    }).catch(() => {
    // Error!
    });

  }

}
