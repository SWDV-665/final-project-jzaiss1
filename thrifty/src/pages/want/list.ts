import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WantProvider } from '../../providers/want/want';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class WantPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public wantListData: WantProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  loadItems() {
    return this.wantListData.getItems();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(WantPage, {
      item: item
    });
  }
}
