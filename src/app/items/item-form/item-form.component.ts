import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Item } from '../shared/item';

import { ItemService } from '../shared/item.service';
import { NotifyService } from '../../core/notify.service';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent {
  item: Item = new Item();

  constructor(private itemSvc: ItemService,
    private ntfySvc: NotifyService) { }
  createItem() {
    this.itemSvc.createItem(this.item);
    this.ntfySvc.update('New ICNEF Subscriber prifile has been created successfully', 'success');
    this.item = new Item(); // reset item
  }
}
