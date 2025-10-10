import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
    selector: 'image-demo',
    templateUrl: './image-demo.html',
    standalone: true,
    imports: [ImageModule]
})
export class ImageDemo {}