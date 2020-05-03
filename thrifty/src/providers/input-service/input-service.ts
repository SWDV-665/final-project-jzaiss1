import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { PurchasesProvider } from '../../providers/purchases/purchases';

/*
  Generated class for the InputServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputServiceProvider {

  constructor(public alertCtrl: AlertController,
              public dataService: PurchasesProvider) {
    console.log('Hello InputServiceProvider Provider');
  }

  itemPromptPurchases(item?, index?) {
    console.log("Adding Item");

    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item ...' : 'Add Item',
      message: "Enter the title of the item purchased, where it was purchased, quantity, total spent and an icon to display",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: item ? item.title : null
        },
        {
          name: 'note',
          placeholder: 'Location purchased',
          value: item ? item.note : null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity : null,
          type: 'number',
          min: 1,
          max: 10
        },
        {
          name: 'price',
          placeholder: 'Enter total amount spent',
          value: item ? item.price : null
        },
        {
          name: 'icon',
          placeholder: 'Choose stats, pricetags or clipboard',
          value: item ? item.icon : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked', data);
            if (index !== undefined) {
              item.name = data.name;
              item.quantity = data.quantity
              this.dataService.editItem(item, index)
            }
            else {
              this.dataService.addItem(data)
            }
            
          }
        }
      ]
    });
    prompt.present();
  }


}
