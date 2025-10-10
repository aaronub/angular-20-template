import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-demo',
    templateUrl: './radio-button-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonDemo {
    ingredient!: string;
}