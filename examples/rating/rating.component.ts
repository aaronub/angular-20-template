import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-demo',
    templateUrl: './rating-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingDemo {
    value!: number;
}