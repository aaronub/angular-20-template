import { Component } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Component({
    selector: 'skeleton-demo',
    templateUrl: './skeleton-demo.html',
    standalone: true,
    imports: [Skeleton]
})
export class SkeletonDemo {}