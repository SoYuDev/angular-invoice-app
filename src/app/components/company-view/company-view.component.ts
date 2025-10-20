import { Component, Input } from '@angular/core';
import { Company } from '../../model/company';

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html',
  styleUrl: './company-view.component.css'
})
export class CompanyViewComponent {

  // Podemos inicializarlo de esta manera o como hemos solido hacer con company!: Company;
  // Los resultados seguirán siendo los mismos que los que hay en invoice.data ya que los sobreescribimos.
  @Input() company: Company = new Company('Company Name', 2);

}
