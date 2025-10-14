import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-number-demo',
    templateUrl: './input-number-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Fluid]
})
export class InputNumberDemo {
    value1: number = 42723;

    value2: number = 58151;

    value3: number = 2351.35;

    value4: number = 50;
}