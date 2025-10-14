import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { DatePicker } from 'primeng/datepicker';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ButtonModule, SelectModule, DatePicker],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-angular20-app');
  
  // Cities data for select components
  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'London', code: 'LDN' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Tokyo', code: 'TKY' },
    { name: 'Sydney', code: 'SYD' },
    { name: 'Dubai', code: 'DXB' },
    { name: 'Singapore', code: 'SIN' }
  ];

  // Select model bindings
  selectedCity: City | null = null;
  selectedCityWithCheckmark: City | null = null;
  selectedCityEditable: City | null = null;
  selectedCityWithClear: City | null = null;

  // DatePicker model bindings
  basicDate: Date | undefined;
  dateWithIcon: Date | undefined;
  rangeDates: Date[] | undefined;
  multiDates: Date[] | undefined;
  minMaxDate: Date | undefined;
  disabledDate: Date | undefined;
  
  // Min and max date constraints
  minDate: Date = new Date();
  maxDate: Date = new Date();
  
  constructor() {
    // Set min date to today
    this.minDate.setDate(this.minDate.getDate());
    
    // Set max date to 30 days from today
    this.maxDate.setDate(this.maxDate.getDate() + 30);
  }
  
  onButtonClick(type: string) {
    console.log(`${type} button clicked!`);
  }
}
