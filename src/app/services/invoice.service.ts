import { Injectable } from '@angular/core';
import { Invoice } from '../model/invoice';
import { invoiceData } from '../components/data/invoice.data';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  // The invoice should come from a backend, right now we are writting that data in 'invoice.data.ts'
  private invoice: Invoice = invoiceData;

  constructor() {}

  // Calcula el valor total del item, crea una instancia nueva a partir del recibo y le añadimos el valor del método calculateTotal() al atributo total
  getInvoice(): Invoice {
    const total = this.calculateTotal();
    // ... crea una copia de la instancia, en este caso una copia del atributo invoice.
    return {... this.invoice, total};
  }

  calculateTotal(): number {
    let total = 0;

    this.invoice.items.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total;
  }

  // Otra manera de calcular el total con la función reduce de los Arrays.
  calculateTotal2(): number {
    // accumulator será el valor que devolvemos que lo inicializamos a 0. Iremos iterando por todo el Array haciendo referencia al objeto como item y sumando su total.
    return this.invoice.items.reduce((accumulator, item) => accumulator + item.total(), 0);
  }
}
