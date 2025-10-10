import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { FloatLabelModule } from 'primeng/floatlabel';

interface City {
  name: string;
  code: string;
}

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-multiselect-section',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    FloatLabelModule
  ],
  templateUrl: './multiselect-section.component.html',
  styleUrl: './multiselect-section.component.scss'
})
export class MultiSelectSectionComponent {
  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'London', code: 'LDN' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Tokyo', code: 'TKY' },
    { name: 'Berlin', code: 'BRL' }
  ];

  selectedCities: City[] = [];
  selectedCitiesWithChips: City[] = [];
  selectedCitiesWithFloatLabel: City[] = [];

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      selectedCities: [[]]
    });
  }

}
