import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
    selector: 'scroll-panel-demo',
    templateUrl: './scroll-panel-demo.html',
    standalone: true,
    imports: [ScrollPanelModule]
})
export class ScrollPanelDemo {}