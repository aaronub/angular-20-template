import { Component } from '@angular/core';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'tag-demo',
    templateUrl: './tag-demo.html',
    standalone: true,
    imports: [Tag]
})
export class TagDemo {}