import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-section',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button-section.component.html',
  styleUrls: ['./button-section.component.scss']
})
export class ButtonSectionComponent {
  // Component logic will go here
} 