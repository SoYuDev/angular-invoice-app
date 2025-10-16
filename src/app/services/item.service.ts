import { Injectable } from '@angular/core';
import { Invoice } from '../model/invoice';
import { invoiceData } from '../components/data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // The invoice should come from a backend, right now we are writting that data in 'invoice.data.ts'
  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    return this.invoice;
  }
}
