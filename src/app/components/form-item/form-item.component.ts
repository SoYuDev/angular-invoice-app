import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../model/item';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {
  // Estamos pasando un objeto Item mediante eventos
  @Output() addItemEventEmitter: EventEmitter<Item> = new EventEmitter();

  private counterId: number = 4;

  item: any = {
    productName: '',
    price: '',
    quantity: '',
  };

  onSubmit(itemForm: NgForm): void {
    if (itemForm.valid) {
      this.addItemEventEmitter.emit({ id: this.counterId, ...this.item });
      this.counterId++;

      this.item = {
        productName: '',
        price: '',
        quantity: '',
      };

      itemForm.reset();
      itemForm.resetForm();
    }
  }
}
