import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-dialog-section',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    AvatarModule
  ],
  templateUrl: './dialog-section.component.html',
  styleUrl: './dialog-section.component.scss'
})
export class DialogSectionComponent {
  visible: boolean = false;
  templateVisible: boolean = false;
  username: string = '';
  email: string = '';

  showDialog() {
    this.visible = true;
  }

  showTemplateDialog() {
    this.templateVisible = true;
  }
} 