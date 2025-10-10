import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-demo',
    templateUrl: './knob-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobDemo {
    value!: number;
}