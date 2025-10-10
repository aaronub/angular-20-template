import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-select-section',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule],
  templateUrl: './select-section.component.html',
  styleUrl: './select-section.component.scss'
})
export class SelectSectionComponent {
  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'London', code: 'LDN' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Tokyo', code: 'TKY' },
    { name: 'Sydney', code: 'SYD' }
  ];

  selectedCity: City | null = null;
  selectedCityWithCheckmark: City | null = null;
  selectedCityEditable: City | null = null;
  selectedCityWithClear: City | null = null;
}
