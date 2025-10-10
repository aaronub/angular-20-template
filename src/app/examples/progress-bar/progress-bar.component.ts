import { Component } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';

@Component({
    selector: 'progress-bar-demo',
    templateUrl: './progress-bar-demo.html',
    standalone: true,
    imports: [ProgressBar]
})
export class ProgressBarDemo {}