import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'select-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SelectModule, MessageModule, ToastModule, ButtonModule],
  templateUrl: './select.component.html'
})
export class SelectDemoComponent {
  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'London', code: 'LDN' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Tokyo', code: 'TKY' },
    { name: 'Sydney', code: 'SYD' }
  ];

  value1: City | undefined;
  value2: City | undefined;
  value3: City | undefined;

  selectedCity: City | null = null;

  messageService = inject(MessageService);

  exampleForm: FormGroup | undefined;

  formSubmitted = false;

  constructor(private fb: FormBuilder) {
      this.exampleForm = this.fb.group({
          selectedCity: ['', Validators.required]
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
      return control?.invalid && (control?.touched || this.formSubmitted);
  }
}
