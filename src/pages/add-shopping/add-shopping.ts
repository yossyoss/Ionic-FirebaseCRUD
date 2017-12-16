import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Toast} from 'ionic-angular';
import { ShoppingItem } from "../../models/shopping-item/shopping-item.interface";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {ShoppingListService} from "../../services/shopping-list/shopping-list.service";
import {ToastService} from "../../services/toast/toast.service";

/**
 * Generated class for the AddShopingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
  item: ShoppingItem = {
    name: '',
    quantity: undefined,
    price: undefined
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private shoppingListService: ShoppingListService,
              private toast: ToastService) {
  }

  addShoppingItem(item: ShoppingItem) {
    this.shoppingListService.addItem(item).then(ref => {
      this.toast.show(`${item.name} added!`);
      this.navCtrl.setRoot('ShoppingListPage', {key: ref.key});
    })

  }

}
