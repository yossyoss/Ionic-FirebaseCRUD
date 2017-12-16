import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ShoppingItem} from "../../models/shopping-item/shopping-item.interface";
import {ShoppingListService} from "../../services/shopping-list/shopping-list.service";
import {ToastService} from "../../services/toast/toast.service";

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item: ShoppingItem;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private shopping: ShoppingListService,private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }
  SaveShoppingItem(item: ShoppingItem) {
    this.shopping.editItem(item).then(() => {
      this.toast.show(`${item.name} saved!`);
      this.navCtrl.setRoot('ShoppingListPage');
    })
  }
  removeShoppingItem(item: ShoppingItem) {
    this.shopping.removeItem(item).then(() => {
      this.toast.show(`${item.name} deleted!`);
      this.navCtrl.setRoot('ShoppingListPage')
    })
  }

}
