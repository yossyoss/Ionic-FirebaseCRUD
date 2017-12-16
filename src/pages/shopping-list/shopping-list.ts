import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ShoppingItem} from "../../models/shopping-item/shopping-item.interface";
import {AngularFireDatabase } from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {ShoppingListService} from "../../services/shopping-list/shopping-list.service";

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  ShoppingList$: Observable<ShoppingItem[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private shoppingListService: ShoppingListService,
              ) {
    this.ShoppingList$ = this.shoppingListService
      .getShoppingList().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }))
      }
    )
  }

  navigateToAddShoppingPage() {
    this.navCtrl.push('AddShoppingPage')
  }

}
