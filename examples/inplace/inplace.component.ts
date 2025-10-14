import { Component } from '@angular/core';
import { InplaceModule } from 'primeng/inplace';

@Component({
    selector: 'inplace-demo',
    templateUrl: './inplace-demo.html',
    standalone: true,
    imports: [InplaceModule]
})
export class InplaceDemo {}