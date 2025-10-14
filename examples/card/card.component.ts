import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'card-demo',
    templateUrl: './card-demo.html',
    standalone: true,
    imports: [CardModule]
})
export class CardDemo {}