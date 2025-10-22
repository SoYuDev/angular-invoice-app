import { Component, Input } from '@angular/core';
import { Company } from '../../model/company';

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html'
})
export class CompanyViewComponent {

  // Podemos asignar valores a company de esta manera, también podriamos inicializarlo con constructor o con !
  // Al final vamos a inyectar el valor que hay en invoice.data.ts
  @Input() company: Company = {name: 'Fake Company', taxIdNumber: 1};

}
