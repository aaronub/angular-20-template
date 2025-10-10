import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-input-text-section',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    InputTextModule, 
    IconFieldModule, 
    InputIconModule,
    FloatLabelModule
  ],
  templateUrl: './input-text-section.component.html',
  styleUrl: './input-text-section.component.scss'
})
export class InputTextSectionComponent {
  value1: string | undefined;

  value2: string | undefined;

  value3: string | undefined;

  value4: string | undefined;

  value5: string | undefined;

  value6: string | undefined;


}
