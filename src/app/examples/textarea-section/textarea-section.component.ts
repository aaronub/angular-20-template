import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-basic-demo',
    templateUrl: './input-textarea-basic-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})

export class InputTextareaBasicDemo {
    value!: string;

    value1: string = '';

    value2: string = '';

    value3: string = '';
}