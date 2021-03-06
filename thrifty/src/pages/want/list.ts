import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WantProvider } from '../../providers/want/want';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InputServiceProvider } from '../../providers/input-service/input-service';
import { SocialSharing } from '@ionic-native/social-sharing';

// This component implements a dedicated data provider named want and
// a shared provider named input-service

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class WantPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ToastController: ToastController,
              public alertCtrl: AlertController,
              public inputService: InputServiceProvider,
              public wantListData: WantProvider,
              public socialSharing: SocialSharing) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  // Here we're using a dedicated provider to get the items for items that make up a want list
  
  loadItems() {
    return this.wantListData.getItems();
  }

  editItem(item, index) {
    console.log("Editing item - ", item, index);

    const toast = this.ToastController.create({
      message: 'Editing Item - ' + item.title + " ...",
      duration: 3000
    });
    toast.present();
    this.inputService.itemPromptWants(item, index);
  }

  addItem() {
    console.log("Adding Item");
    this.inputService.itemPromptWants();
  }

  removeItem(item, index) {
    console.log("Removing item - ", item, index);

    const toast = this.ToastController.create({
      message: 'Removing Item - ' + item.title + " ...",
      duration: 3000
    });
    toast.present();
    this.wantListData.removeItem(index);
  }

  textItem(item, index) {
    console.log("Sending item via SMS - ", item, index);

    const toast = this.ToastController.create({
      message: 'Sending Item - ' + item.title + " ....",
      duration: 3000
    });
    toast.present();

    let message = "I'm looking for " + item.title + " and my budget is $" + item.price

    // Share via SMS
    this.socialSharing.shareViaSMS(message, '123456789').then(() => {
    // Success!
    }).catch(() => {
    // Error!
    });

  }

}
