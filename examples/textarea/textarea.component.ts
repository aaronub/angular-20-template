import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'textarea-demo',
    templateUrl: './textarea.component.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})

export class TextareaDemoComponent {
    value!: string;

    value1: string = '';

    value2: string = '';

    value3: string = '';
}