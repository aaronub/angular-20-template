import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'button-demo',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button.component.html'
})
export class ButtonDemo {
  loading: boolean = false;

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }
} 