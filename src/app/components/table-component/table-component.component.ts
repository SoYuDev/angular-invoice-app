import { Component, Input } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {

  @Input() items!: Item[];

}
