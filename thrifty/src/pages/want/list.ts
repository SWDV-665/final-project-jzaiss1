import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WantProvider } from '../../providers/want/want';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InputServiceProvider } from '../../providers/input-service/input-service';

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
              public wantListData: WantProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

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

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(WantPage, {
      item: item
    });
  }
}
