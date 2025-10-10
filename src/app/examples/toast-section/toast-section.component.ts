import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast-section',
  standalone: true,
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule
  ],
  providers: [MessageService],
  templateUrl: './toast-section.component.html',
  styleUrl: './toast-section.component.scss'
})
export class ToastSectionComponent {
  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message sent successfully' });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Please check your email' });
  }

  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Your session will expire soon' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message' });
  }

  showSecondary() {
    this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'This is a secondary message' });
  }

  showContrast() {
    this.messageService.add({ severity: 'contrast', summary: 'Contrast', detail: 'This is a contrast message' });
  }
} 