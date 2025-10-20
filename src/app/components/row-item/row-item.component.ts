import { Component, Input } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'tr[app-row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.css'
})
export class RowItemComponent {
  @Input() item!: Item;
}
