import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {ShoppingItem} from "../../models/shopping-item/shopping-item.interface";


@Injectable()
export class ShoppingListService {
  private shoppingListRef = this.db.list<ShoppingItem>('shopping-list');


  constructor(private db: AngularFireDatabase){}

  getShoppingList() {
    return this.shoppingListRef;
  };
  addItem(item: ShoppingItem) {
    return this.shoppingListRef.push(item);
  }
  editItem(item: ShoppingItem) {
    return this.shoppingListRef.update(item.key, item);
  }
  removeItem(item: ShoppingItem) {
    return this.shoppingListRef.remove(item.key);
  }
}
