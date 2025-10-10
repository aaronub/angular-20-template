import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';

@Component({
    selector: 'slider-demo',
    templateUrl: './slider-demo.html',
    standalone: true,
    imports: [FormsModule, Slider]
})
export class SliderDemo {
    value!: number;
    rangeValues: number[] = [20, 80];
}