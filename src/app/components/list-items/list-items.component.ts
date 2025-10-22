import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../model/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {

  @Input() items!: Item[];

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  // Volvemos a emitir al componente padre (InvoiceComponent)
  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
}
