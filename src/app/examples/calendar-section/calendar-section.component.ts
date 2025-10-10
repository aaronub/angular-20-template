import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar-section',
  standalone: true,
  imports: [CommonModule, DatePicker, FormsModule],
  templateUrl: './calendar-section.component.html',
  styleUrls: ['./calendar-section.component.scss']
})
export class CalendarSectionComponent {
  date: Date | undefined;
  rangeDates: Date[] | undefined;
} 