import { Injectable } from '@angular/core';
import { Invoice } from '../model/invoice';
import { invoiceData } from '../components/data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  // The invoice should come from a backend, right now we are writting that data in 'invoice.data.ts'
  private invoice: Invoice = invoiceData;

  constructor() { }

  // Calcula el valor total del item, crea una instancia nueva a partir del recibo y le añadimos el valor del método calculateTotal() al atributo total
  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  calculateTotal(): number {
    let total : number = 0;


    this.invoice.items.forEach(item => {
      total += item.price * item.quantity;
    })

    return total;
  }

  // Otra manera de calcular el total con reduce (método de Arrays en JS para reducir los valores de la lista a un solo resultado)
  // El valor se va guardando en la variable accumulator, le sumamos el valor del conjunto de los items y lo inicializamos a 0.
  calculateTotal2(): number {
    return this.invoice.items.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0)
  }
}
