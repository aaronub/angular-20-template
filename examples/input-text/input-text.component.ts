import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'input-text-demo',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    InputTextModule, 
    IconFieldModule, 
    InputIconModule,
    FloatLabelModule,
    ButtonModule,
    ToastModule,
    MessageModule
  ],
  templateUrl: './input-text.component.html'
})
export class InputTextDemoComponent {
  value1: string | undefined;

  value2: string | undefined;

  value3: string | undefined;

  messageService = inject(MessageService);

  exampleForm: FormGroup;

  formSubmitted = false;

  constructor(private fb: FormBuilder) {
      this.exampleForm = this.fb.group({
          username: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]]
      });
  }

  onSubmit() {
      this.formSubmitted = true;
      if (this.exampleForm.valid) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
          this.exampleForm.reset();
          this.formSubmitted = false;
      }
  }

  isInvalid(controlName: string) {
      const control = this.exampleForm.get(controlName);
      return control?.invalid && (control.touched || this.formSubmitted);
  }


}
