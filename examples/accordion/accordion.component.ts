import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'accordion-demo',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  templateUrl: './accordion.component.html'
})
export class AccordionDemo {
  // Component logic will go here
} 