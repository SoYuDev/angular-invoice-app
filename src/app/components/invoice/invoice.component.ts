import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../model/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent, ClientViewComponent, CompanyViewComponent, ListItemsComponent, TotalComponent, FormItemComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;

  // Dependency Injection -- InvoiceService
  constructor(private service: InvoiceService) {

  }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  // Comprobamos cual es el id que hemos ido recibiendo de los hijos, iteramos los arrays y si detecta que el id es igual, lo borra.
  removeItem(id:number) {
    this.invoice = this.service.remove(id);
  }

  addItem(item: Item) {
    this.invoice = this.service.save(item);
  }

}
