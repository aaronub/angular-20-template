import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-demo',
    templateUrl: './input-mask-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskDemo {
    value: string | undefined;
        
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}