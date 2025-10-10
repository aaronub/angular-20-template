import { Component } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
    selector: 'progress-spinner-demo',
    templateUrl: './progress-spinner-demo.html',
    standalone: true,
    imports: [ProgressSpinner]
})
export class ProgressSpinnerDemo {}