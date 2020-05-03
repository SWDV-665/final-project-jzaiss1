import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { PurchasesProvider } from '../../providers/purchases/purchases';
import { SalesProvider } from '../../providers/sales/sales';
import { WantProvider } from '../../providers/want/want';

/*
  Generated class for the InputServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

// This provider is shared among the multipe pages.
// Each page has a unique prompt describing the inputs

@Injectable()
export class InputServiceProvider {

  constructor(public alertCtrl: AlertController,
              public purchaseDataService: PurchasesProvider,
              public salesDataService: SalesProvider,
              public wantsDataService: WantProvider) {
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
              item.title = data.title;
              item.note = data.note;
              item.quantity = data.quantity;
              item.price = data.price;
              item.icon = data.icon
              this.purchaseDataService.editItem(item, index)
            }
            else {
              this.purchaseDataService.addItem(data)
            }
            
          }
        }
      ]
    });
    prompt.present();
  }


  itemPromptSales(item?, index?) {
    console.log("Adding Item");

    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item ...' : 'Add Item',
      message: "Enter the title of the item sold where it was sold, quantity, total sale and an icon to display",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: item ? item.title : null
        },
        {
          name: 'note',
          placeholder: 'Location of sale',
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
          placeholder: 'Enter total sale',
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
              item.title = data.title;
              item.note = data.note;
              item.quantity = data.quantity;
              item.price = data.price;
              item.icon = data.icon
              this.salesDataService.editItem(item, index)
            }
            else {
              this.salesDataService.addItem(data)
            }
            
          }
        }
      ]
    });
    prompt.present();
  }

  itemPromptWants(item?, index?) {
    console.log("Adding Item");

    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item ...' : 'Add Item',
      message: "Enter the title of the wanted, a note, quantity, total budget and an icon to display",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: item ? item.title : null
        },
        {
          name: 'note',
          placeholder: 'Notes',
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
          placeholder: 'Enter total budget',
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
              item.title = data.title;
              item.note = data.note;
              item.quantity = data.quantity;
              item.price = data.price;
              item.icon = data.icon
              this.wantsDataService.editItem(item, index)
            }
            else {
              this.wantsDataService.addItem(data)
            }
            
          }
        }
      ]
    });
    prompt.present();
  }

}
