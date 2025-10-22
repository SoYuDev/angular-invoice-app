import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'tr[app-row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
})
export class RowItemComponent {
  @Input() item!: Item;

  // Emitimos al componente padre (ListItemsComponent) un aviso de que queremos eliminar un item a partir del id
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  onRemove(id: number): void {
    this.removeEventEmitter.emit(id);
  }
}
