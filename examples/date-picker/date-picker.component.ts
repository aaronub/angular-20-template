import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'date-picker-demo',
  standalone: true,
  imports: [CommonModule, DatePicker, FormsModule, FloatLabel, MessageModule, ToastModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './date-picker.component.html'
})
export class DatePickerDemoComponent {
  date: Date | undefined;
  rangeDates: Date[] | undefined;
  value1: Date | undefined;
  value2: Date | undefined;
  value3: Date | undefined;

  minDate: Date | undefined;

  maxDate: Date | undefined;

  ngOnInit() {
      let today = new Date();
      let month = today.getMonth();
      let year = today.getFullYear();
      let prevMonth = (month === 0) ? 11 : month -1;
      let prevYear = (prevMonth === 11) ? year - 1 : year;
      let nextMonth = (month === 11) ? 0 : month + 1;
      let nextYear = (nextMonth === 0) ? year + 1 : year;
      this.minDate = new Date();
      this.minDate.setMonth(prevMonth);
      this.minDate.setFullYear(prevYear);
      this.maxDate = new Date();
      this.maxDate.setMonth(nextMonth);
      this.maxDate.setFullYear(nextYear);
  }

  messageService = inject(MessageService);
  exampleForm: FormGroup | undefined;

  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
      this.exampleForm = this.fb.group({
          selectedDate: ['', Validators.required]
      });
  }
  onSubmit() {
      this.formSubmitted = true;
      if (this.exampleForm?.valid) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
          this.exampleForm?.reset();
          this.formSubmitted = false;
      }
  }

  isInvalid(controlName: string) {
      const control = this.exampleForm?.get(controlName);
      return control?.invalid && (control.touched || this.formSubmitted);
  }
} 