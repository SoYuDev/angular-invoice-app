import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InvoiceComponent } from './components/invoice/invoice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InvoiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-invoice-app';
}
