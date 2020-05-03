import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PurchasesProvider } from '../../providers/purchases/purchases';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InputServiceProvider } from '../../providers/input-service/input-service';
import { SocialSharing } from '@ionic-native/social-sharing';

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
              public inputService: InputServiceProvider,
              public purchaseData: PurchasesProvider,
              public socialSharing: SocialSharing) {

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

  editItem(item, index) {
    console.log("Editing item - ", item, index);

    const toast = this.ToastController.create({
      message: 'Editing Item - ' + item.title + " ...",
      duration: 3000
    });
    toast.present();
    this.inputService.itemPromptPurchases(item, index);
  }

  addItem() {
    console.log("Adding Item");
    this.inputService.itemPromptPurchases();
  }


  textItem(item, index) {
    console.log("Sending item via SMS - ", item, index);

    const toast = this.ToastController.create({
      message: 'Sending Item - ' + item.title + " ....",
      duration: 3000
    });
    toast.present();

    let message = "Look what I found " + item.title + " at the " + item.note + " for only $" + item.price

    // Share via SMS
    this.socialSharing.shareViaSMS(message, '123456789').then(() => {
    // Success!
    }).catch(() => {
    // Error!
    });

  }

}
