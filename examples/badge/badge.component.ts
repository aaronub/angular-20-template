import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'badge-demo',
    templateUrl: './badge-demo.html',
    standalone: true,
    imports: [BadgeModule]
})
export class BadgeDemo {}